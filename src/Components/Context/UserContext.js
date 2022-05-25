import React from 'react'

const UserContext = React.createContext({
    empname : '',
    empid : '',
    onChangeEmpName : () => {},
    onChangeEmpCode : () => {}
});

export default UserContext;