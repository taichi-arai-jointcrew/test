import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, Text, LayoutAnimation } from 'react-native';
import CommonStyles from '../../commonStyles';
import AccordionStyles from './AccordionStyle';

export const mapStateToProps = state => ({ y: 0 });

export const mapDispatchToProps = {};

export const AccordionHOC = WrappedComponent => {
  class HOCComponent extends React.Component<Porps, State> {
    constructor(props) {
      super(props);
      console.log("props?",this.props.opendY, this.props.closedY);
      this.state = { y: this.props.opendY, isOpend: true };
    }
    close() {
      console.log(this);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({ y: this.props.closedY, isOpend: false });
    }
    open() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({ y: this.props.opendY, isOpend: true });
    }
    render() {
      return (
        <TouchableWithoutFeedback
          onPress={() => this.state.isOpend ? null : this.open()}
          disabled={this.state.isOpend}
        >
          <View style={[AccordionStyles.container, { top: this.state.y }]}>

            {this.state.isOpend ?
              <TouchableWithoutFeedback onPress={() => this.close()}>
                <View style={AccordionStyles.closer}>
                  <Text style={[CommonStyles.fontWhite, CommonStyles.fontEnhance]}>Back</Text>
                </View>
              </TouchableWithoutFeedback>
              : null
            }

            <WrappedComponent {...this.props} />;
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  HOCComponent.defaultProps = { opendY: '0%', closedY: '70%'};
  return HOCComponent;
};

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(AccordionHOC(WrapperComponent));
