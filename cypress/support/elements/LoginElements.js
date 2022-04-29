class LoginElements {
    
    username = () =>{
        return'[data-test=username]'
    }
    password = () => {
        return'[data-test=password]'
    }

    botaoLogin = () => {
        return'#login-button'

    }

    visualizaProdutos = () =>{
        return'div.header_secondary_container'
    }

}

export default LoginElements;
