describe('Verify API Response', () => {

    it('should verify the response body', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/6980146',
            headers: {
                'authorization': 'Bearer 72dea5b1c46e1ab45e0906bb6d4fb1fd4eba441fe697bce480327ee4a26bdeba'
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.id).to.eq(6980146)
            expect(res.body.name).to.eq('Mangalya Tagore')
        });
    });

    it('post method', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer 72dea5b1c46e1ab45e0906bb6d4fb1fd4eba441fe697bce480327ee4a26bdeba'
            }
        })
    })
});
