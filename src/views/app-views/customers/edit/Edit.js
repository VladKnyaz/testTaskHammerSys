import React from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { useHistory } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const EditCustomer = ({location}) => {
    const history = useHistory();
    if (!location?.state?.user) return history.push(APP_PREFIX_PATH);
    const user = location.state.user;
  
    const onFinish = values => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        message.success({ content: 'Done!', key, duration: 2 });
        history.goBack();
      }, 1000);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    
    return (
        <>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        user || {}
                    }
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ 
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!' 
                                        }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phone"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Company"
                                        name={['company', 'name']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Address"
                                        name={['address','street']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name={['address','city']}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit" className='mr-3'>
                                Save Change
                            </Button>
                            <Button onClick={history.goBack} type="default" htmlType="button">
                                Go back
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}



export default EditCustomer