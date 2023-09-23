const { pages } = require('../pages/Pages');
const { expect } = require('chai');


describe('Checkout checking', () => {
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

    it('Checkout actions', async () => {
        await $('.shopping_cart_link').click();
        await $('#checkout').click();

        await $('#first-name').setValue('Margo');
        await $('#last-name').setValue('Kom');
        await $('#postal-code').setValue('99901');
        await $('#continue').click();
 
    }); 

    it('TY page checking', async () => {
        const title = await $('.inventory_item_name');
        const titleExisting = await title.isExisting();
        expect(titleExisting).to.be.true;

        const descr = await $('.inventory_item_desc');
        const descrExisting = await descr.isExisting();
        expect(descrExisting).to.be.true;

        const prodCost = await $('.inventory_item_price');
        const costExisting = await prodCost.isExisting();
        expect(costExisting).to.be.true;

    });

    it('Total cost checking', async () => {             
        const taxCost = await $('.summary_tax_label');
        const taxText = await taxCost.getText();

        const productCost = await $('.inventory_item_price');
        const productCostText = await productCost.getText();

        const totalCost = await $('.summary_total_label');
        const totalText = await totalCost.getText();
        

        const taxMatch = taxText.match(/\$([\d.]+)/);
        const costMatch = productCostText.match(/\$([\d.]+)/);
        const totalMatch = totalText.match(/\$([\d.]+)/);

        let tax = parseFloat(taxMatch[1]);
        let cost= parseFloat(costMatch[1]);
        let total= parseFloat(totalMatch[1]);

        const expectedTotal = tax + cost;
        expect(expectedTotal).to.equal(total);
        


    }); 
    

})