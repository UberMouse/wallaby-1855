const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({
    map: json => ({
        ...json,
        props: json.props
    })
}));

Enzyme.configure({
    adapter: new Adapter()
});

import React from 'react';
import { mount } from 'enzyme';

const Test: React.StatelessComponent<{}> = () => <p>Test</p>;

it('works', () => {
    expect(mount(<Test />)).toMatchSnapshot();
});