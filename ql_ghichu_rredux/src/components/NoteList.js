import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="section1HeaderId">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                            Ghi chu 17/8
                            </a>
                        </h5>
                        </div>
                        <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti totam qui explicabo ad rem distinctio earum culpa odit. Voluptatibus animi quas necessitatibus minima deleniti? Optio veniam facere deserunt similique.
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="section2HeaderId">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                            Ghi chu 18/7
                            </a>
                        </h5>
                        </div>
                        <div id="section2ContentId" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                        <div className="card-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt porro obcaecati labore consectetur deleniti error odit repudiandae hic eos! Perferendis natus quae doloribus libero culpa expedita eius reprehenderit molestias.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;