Feature: Compra de produtos no Site saucedemo

    Scenario: compra de produtos saucedemo
        Given esteja logado no site saucedemo
        When selecionar produtos
        Then produtos sao exibidos no carrinho

        
    


