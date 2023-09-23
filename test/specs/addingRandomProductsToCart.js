const { pages } = require('../pages/Pages');

describe('Add random products to the Cart and Check', () => {
    it('Login',  before (async () => {
        await pages.loginPage.navigate();
        await pages.loginPage.performLogin('standard_user', 'secret_sauce');

    })); 

    it('Add Random product to the Cart', async () => {
        const products = await $$('#inventory_item_name');
        const numberOfProductsToAdd = 3;

        for (let i = 0; i < numberOfProductsToAdd; i++) {
            const randomIndex = Math.floor(Math.random() * products.length);
            const randomProduct = products[randomIndex];
            await $('.btn_inventory').click();
        }
       
    }); 

    it('Check items in the Cart', async () => {
        const productName = await $('.inventory_item_name'); 
        const productTitle = await $('.inventory_item_name').getText();

        const productDescr = await $('.inventory_item_desc'); 
        const productText = await $('.inventory_item_desc').getText();

        const productPrice = await $('.inventory_item_price'); 
        const productPriceValue = await $('.inventory_item_price').getText();
        await $('.shopping_cart_link').click();

        const productNameCart = await $('.inventory_item_name'); 
        const productTitleCart = await $('.inventory_item_name').getText();

        const productDescrCart = await $('.inventory_item_desc'); 
        const productTextCart = await $('.inventory_item_desc').getText();

        const productPriceCart = await $('.inventory_item_price'); 
        const productPriceValueCart = await $('.inventory_item_price').getText();


        expect(productTitle).toStrictEqual(productTitleCart);
        expect(productText).toStrictEqual(productTextCart);
        expect(productPriceValue).toStrictEqual(productPriceValueCart);
       
    }); 
    
})