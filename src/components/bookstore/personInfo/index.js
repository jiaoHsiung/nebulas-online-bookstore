import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import Routes from './routers';
import './personinfo.less';
const { Content } = Layout;

export default function PersonInfo({ match }) {
  return (
   <div className="person-wrapper">
      <Layout>
         <Content style={{backgroundColor: '#fff', padding: '20px 0'}}>
            <div className="wrapper">
               <div className="flex-box">
                  <Sidebar pathname={match.pathname} />
                  <div className="info-main-constraint">
                     <div className="body-constraint">
                      <Switch>
                        {
                          Routes.map(({name, path, component }) => (
                            <Route path={path} component={component} key={name} />
                          ))
                        }
                      </Switch>
                     </div>
                 </div>
               </div>
            </div>
         </Content>
      </Layout>
   </div>
  );
}
