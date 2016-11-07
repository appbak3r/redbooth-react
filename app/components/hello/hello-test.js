import React from 'react';
import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Hello from './index';

describe('Hello Component', ()=> {
  it('works', ()=> {
    const renderer = createRenderer();
    renderer.render(<Hello />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h1>Hello, World!</h1>;
    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('accepts `name` as a property', ()=>{
    const renderer = createRenderer();
    renderer.render(<Hello name="RedBooth"/>);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h1>Hello, RedBooth!</h1>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
