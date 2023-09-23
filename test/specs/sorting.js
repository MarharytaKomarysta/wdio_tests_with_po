const { pages } = require('../pages/Pages');

describe('Sorting test', () => {
    it('Perform login',  before (async () => {
        await pages.loginPage.navigate();
        await pages.loginPage.performLogin('standard_user', 'secret_sauce');
    })); 
    
    it('Sorting by Name A-Z', async () => {
        await $('.product_sort_container').click();
        const sortingEl = await $('select.product_sort_container option[value="az"]');
        sortingEl.click();
    });
    
    it('Sorting by Name (Z to A)', async () => {
        await $('.product_sort_container').click();
        const sortingEl = await $('select.product_sort_container option[value="za"]');
        sortingEl.click();
    });
    
    it('Sorting by Price (low to high))', async () => {
        await $('.product_sort_container').click();
        const sortingEl = await $('select.product_sort_container option[value="lohi"]');
        sortingEl.click();
    });

    it('Sorting by Price (high to low)', async () => {
        await $('.product_sort_container').click();
        const sortingEl = await $('select.product_sort_container option[value="hilo"]');
        sortingEl.click();
    });
})