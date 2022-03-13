class table {


    elements(){
       return cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg')
    }
    webtables(){
       return cy.get('#item-3')
    }
    addbutton(){
       return cy.get('#addNewRecordButton')
    }
    firstname(){
       return cy.get('#firstName')
    }
    lastname(){
       return cy.get('#lastName')
    }
    email(){
      return  cy.get('#userEmail')
    }
    age(){
       return cy.get('#age')
    }
    salary(){
       return cy.get('#salary')
    }
    department(){
       return cy.get('#department')
    }
    submitbutton(){
      return  cy.get('#submit')
    }
    editbutton(){
        return cy.get('#edit-record-4 > svg')
    }
    deletbutton(){
       return cy.get('#delete-record-4 > svg > path')
    }
}
export default table