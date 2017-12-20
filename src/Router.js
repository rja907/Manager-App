//All possible screens that the user can visit inside the app!
import React from 'react';
import {
  Scene,
  Stack,
  Router,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee"
          type={ActionConst.REPLACE}
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
