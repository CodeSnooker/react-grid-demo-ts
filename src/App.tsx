import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import './App.css'

const ReactGridLayout = WidthProvider(RGL)

class DemoLayout extends React.PureComponent {
  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    preventCollision: false,
    compactType: null,
    cols: 12,
  }

  render() {
    return (
      <ReactGridLayout {...this.props}>
        <div key='1' data-grid={{ x: 0, y: 0, w: 3, h: 3, static: false }}>
          <span>MOVE</span>
        </div>
        <div key='2' data-grid={{ x: 0, y: 0, w: 3, h: 3, static: false }}>
          <span>MOVE</span>
        </div>
        <div key='3' data-grid={{ x: 0, y: 0, w: 3, h: 3, static: true }}>
          <span>STATIC</span>
        </div>
      </ReactGridLayout>
    )
  }
}

export default DemoLayout
