import React from 'react';
import lodash from 'lodash';
import { Vector3, Euler, Vector2 } from 'three'
import { TangramConfiguration } from 'renderables/Tangram'

const frame: TangramConfiguration = {
    assembledSize: new Vector2(113, 63.75),
    assembleOffset: new Vector2(28.99, -1.88),
    resizeMode: 'cover',
    pieces: [
      {
        pathId: 'BigTriangle2',
        position: new Vector3(-20, 15, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'Square',
        position: new Vector3(-20, 0, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'MediumTriangle',
        position: new Vector3(-22.2, -10.5, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'SmallTriangle1',
        position: new Vector3(30, -30, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'SmallTriangle2',
        position: new Vector3(80.5, 20, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'BigTriangle1',
        position: new Vector3(78, 10.2, 0),
        rotation: new Euler(0, 0, 0),
      },
      {
        pathId: 'Rhombus',
        position: new Vector3(81.7, -8.5, 0),
        rotation: new Euler(0, 0, 0),
      },
    ],
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export const decode = (text) => {

    if (text === '') return '';
    let input = text;
    let regex = /((\d+)?(\D))/g;
    let result = '';
    let match = regex.exec(input);
    do {
        result += match[3].repeat(+match[2]) || match[3];
        match = regex.exec(input);
    } while (match);
    console.log(regex);
};

export const encode = (text) => {
    if (text === '') return '';
    let input = text;
    let regex = /(.)\1*/g;
    let result = '';
    let match = regex.exec(input);
    let match = regex.exec(input);

    console.log({ result  });
    return result;
};

export { frame }
