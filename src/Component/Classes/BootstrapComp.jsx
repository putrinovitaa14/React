import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';

class BootstrapComp extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state
    // }

    render() {
        return (
            <div>
                <Alert>
                    <h4 className="alert-heading">
                        Well done!
                    </h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>

                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                                Mark
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                2
                            </th>
                            <td>
                                Jacob
                            </td>
                            <td>
                                Thornton
                            </td>
                            <td>
                                @fat
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                3
                            </th>
                            <td>
                                Larry
                            </td>
                            <td>
                                the Bird
                            </td>
                            <td>
                                @twitter
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default BootstrapComp;