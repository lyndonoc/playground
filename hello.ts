import React from 'react';
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
export { frame }
