import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
const LegalNotice = () => {
    return (
        <Layout>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1>Legal Notice</h1>
                        <p className='fs-5'>Company name: Exotic City sprl</p>
                        <p className='fs-5'>Legal form: Private limited company – SPRL</p>
                        <p className='fs-5'>Headquarters address: Avenue de l’expansion, 1 – 4432 Alleur – Belgium</p>
                        <p className='fs-5'>Tel: +32 (0)4.228.04.00</p>
                        <p className='fs-5'>Email: info@exoticcity.be</p>
                        <p className='fs-5'>ECB number – VAT: BE 0882 540 147</p>


                    </div>

                </div>
            </div>
        </Layout>

    )
}

export default LegalNotice