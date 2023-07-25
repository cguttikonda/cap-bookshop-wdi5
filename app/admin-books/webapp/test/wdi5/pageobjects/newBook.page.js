module.exports = {
        /**
         * define actions for the page object
         */
        iEnterTitle: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::title::Field-edit",
                        interaction: {
                                idSuffix: "inner"
                        }
                }}).enterText("test");
            },
        
            iSelectGenre: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
                }}).press();
                await browser.asControl({
                        selector: {
                        controlType: "sap.m.Text",
                        viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                        viewId: "books::BooksDetailsList",
                        bindingPath: {
                                path: "/Genres(10)",
                                propertyPath: "name"
                        },
                        searchOpenDialogs: true
                }}).press();
            },
            iSelectAuthor: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
                }}).press();
        
                await browser.asControl({
                        selector: {
                        controlType: "sap.m.Link",
                        viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                        viewId: "books::BooksDetailsList",
                        bindingPath: {
                                path: "/Authors(101)",
                                propertyPath: "name"
                        },
                        searchOpenDialogs: true
                }}).press();
                    
            },
            iPressCreate: async () => {
                await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::FooterBar::StandardAction::Save",
                        interaction: {
                                idSuffix: "BDI-content"
                        }
                }}).press();
            },
            iSeeEditButton: async () => {
                const enabled = await browser.asControl({
                        selector: {
                        id: "books::BooksDetailsList--fe::StandardAction::Edit"
                }}).getEnabled();
                expect(enabled).toBeTruthy();
            },
            iNavigateBack: async () => {
                await browser.asControl({
                        selector: {
                        id: "backBtn"
                }}).press();
            },
            


        /**
         * define assertions for the page object
         */
};