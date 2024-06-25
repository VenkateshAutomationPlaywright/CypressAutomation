import 'cypress-file-upload';
describe("File Upload",()=>{
    it("single file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("#file-upload").attachFile('invoicesample.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it("Rename file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("#file-upload").attachFile({filePath:'cypress_JS_automation.pdf',fileName:'venkatesh.pdf'});
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it("Drag and drop to upload file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("#drag-drop-upload").attachFile('invoicesample.pdf',{subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('invoicesample.pdf')
    })


    it.only("upload multiple file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("#drag-drop-upload").attachFile(['cypress_JS_automation.pdf','invoicesample.pdf']);
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('invoicesample.pdf')
    })
})