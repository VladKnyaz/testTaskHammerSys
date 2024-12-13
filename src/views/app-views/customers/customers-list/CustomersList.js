import React, { useEffect, useState } from 'react'
import service from 'auth/FetchInterceptor'
import { Button, Table, Tag, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useHistory } from "react-router-dom";

const CustomersList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await service.get('users');
                setData(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onDeleteUser = (id) => {
        const newData = data.filter((user)=>user.id!==id);
        setData(newData);
    }
 
    const editUser = (user) => {
        history.push({
            pathname: 'edit',
            state: {user}
        });
    }
    
    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                      b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            render: company => (
                <span>{company.name}</span>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                      b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Website',
            dataIndex: 'website',
            render: website => (
                <Tag className ="text-capitalize" color='cyan'><a rel="noreferrer" href={`https://${website}`} target='_blank'>{website}</a></Tag>
            ),
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Edit">
                        <Button type="primary" onClick={()=>editUser(elm)} className="mr-2" icon={<EditOutlined />} size="small"/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger onClick={()=>onDeleteUser(elm.id)} icon={<DeleteOutlined />} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];
    return (
        <div>
            <Table columns={tableColumns} dataSource={data} rowKey='id' loading={loading}/>
            {/* <InfiniteCanvasFabric></InfiniteCanvasFabric> */}
        </div>
    )
}

export default CustomersList

