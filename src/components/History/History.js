import React from 'react';

const History = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='center pa5 br3 shadow-5'>
                        <div class="overflow-auto">
                            <table className="f6 w-100 mw8 center" cellspacing="0">
                                <thead className='center lh-copy'>
                                    <tr className="stripe-dark">
                                    <th className="fw6 tl pa3 bg-white">Name</th>
                                    <th className="fw6 tl pa3 bg-white">Username</th>
                                    <th className="fw6 tl pa3 bg-white">Email</th>
                                    <th className="fw6 tl pa3 bg-white">ID</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                    <tr className="stripe-dark">
                                    <td className="pa3">Hassan Johnson</td>
                                    <td className="pa3">@hassan</td>
                                    <td className="pa3">hassan@companywithalongdomain.co</td>
                                    <td className="pa3">14419232532474</td>
                                    </tr>
                                    <tr className="stripe-dark">
                                    <td className="pa3">Taral Hicks</td>
                                    <td className="pa3">@hicks</td>
                                    <td className="pa3">taral@companywithalongdomain.co</td>
                                    <td className="pa3">72326219423551</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default History;