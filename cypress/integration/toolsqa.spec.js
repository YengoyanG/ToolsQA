
import Table from '../page/page.spec'


describe('ToolsQA', function(){
    const table = new Table()

    it('Test ToolsQA', function(){

        cy.visit('/')
        table.elements().click()
        table.webtables().click().should('be.visible')
        table.addbutton().click().should('be.visible')
        table.firstname().type('Gor')
        table.lastname().type('Yengoyan')
        table.email().type('yengoyan@mail.ru')
        table.age().type('22')
        table.salary().clear().type('80000')
        table.department().type('xxxxx')
        table.submitbutton().click().should('be.visible')
        table.editbutton().click()
        table.salary().clear().type('40000')
        table.email().clear().type('yengoyan@gmail.com')
        table.submitbutton().click().should('be.visible')
        table.deletbutton().click()
    })
})