import Loading from 'components/shared-components/Loading';
import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import EditCustomer from './edit/Edit';

const Customers = ({match}) => {

    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Redirect exact from={`${match.url}`} to={`${match.url}`} />
                <Route path={`${match.url}/list`} component={lazy(() => import(`./customers-list/CustomersList`))} />
                <Route path={`${match.url}/edit`} component={EditCustomer} />
            </Switch>
      </Suspense>
    )
}

export default Customers
