import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
    <Router>
        <Scene hideNavBar>
         <Scene key='auth'>
             <Scene
                 key='login'
                 component={LoginForm}
                 title='Please Login' titleStyle={{flex:1, textAlign: 'center'}}
                 
                 />
            </Scene>

         <Scene key='main'>
             <Scene
             	 rightTitle="Add"
             	 onRight={() => Actions.employeeCreate()}
                 key='employeeList'
                 component={EmployeeList}
                 title='Employees'
                 titleStyle={{flex:1, textAlign: 'center'}}
                 initial
              />
         <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
         <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
     </Scene>
    </Router>
    );


export default RouterComponent;