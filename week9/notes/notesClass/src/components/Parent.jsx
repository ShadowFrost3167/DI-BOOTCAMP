const Parent = (props) => {
    if (props.auth === 'admin'){
    return props.children;
}
return<h2>unauthorized access, not admin</h2>
};

export default Parent;