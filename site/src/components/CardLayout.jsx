import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CardWrapper from './CardWrapper';
import Data from './CardLayoutData';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default class CardLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: "lg"
        };
    }
    render() {
    const layouts = { lg: Data.layout1, md: Data.layout2, sm: Data.layout2, xs: Data.layout2, xxs: Data.layout2 };
    return (
        <div>
            <ResponsiveGridLayout
                {...this.props}
                className="layout" 
                layouts={layouts} 
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                >
                <div key="a"><CardWrapper /></div>
                <div key="b"><CardWrapper /></div>
                <div key="c"><CardWrapper /></div>
                <div key="d"><CardWrapper /></div>
                <div key="e"><CardWrapper /></div>
                <div key="f"><CardWrapper /></div>
                <div key="g"><CardWrapper /></div>
            </ResponsiveGridLayout>
        </div>
      );
    }
}

CardLayout.defaultProps = {
    className: "layout",
    margin:[30, 30],
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };