import React from 'react'

const Game = () => {
  return (
     <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {`1. /**
2.  * Favourite Game
3.  *
4.  * My favourite games include Cricket
5.  * and Carrom.
6.  *
7.  * Playing these games helps me develop
8.  * strategic thinking, focus, and
9.  * patience, which also supports my
10. * professional work and problem-solving skills.
11. */

`}
      </pre>
       <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
          My favourite games include Football and Carrom. Playing these games helps me develop strategic thinking, focus, and patience, which also supports my professional work and problem-solving skills.

        </p>
      </div>
    </div>
  )
}

export default Game