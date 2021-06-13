import React, { Component } from 'react';
import { Animated, View, Styleheet, Image, Dimensions, ScrollView , Text, TextInput, TouchableOpacity} from 'react-native';
import { Color, Style } from "../tools";
import Theme from "../theme/theme";

export default class FormMultipartsComponent extends Component {
   currentPart = 0;
   numItems = this.props.items.length;
   
   constructor(props) {
      super(props);
      
      this.state = {}

      this.props.items.map(item => {
         item.map(input => {
            this.state[input.property] = null;
         })
      });
      
      this.state.currentPart = [];
   }

   showFormPart = (i) => {
      const formInputsArray = [];

      this.props.items[i]
      .map((input, j) => {
         const inputOfType = {
            'number': (
               <TextInput
                  style={Style.input}
                  onChangeText={value => this.setState({[input.property]: value})}
                  value={this.state[input.property]}
                  placeholderTextColor={Theme.colorInputsPlaceholder}
                  placeholder={input.label}
                  numeric
               />
            ),
            'text': (
               <TextInput
                  style={Style.input}
                  onChangeText={value => this.setState({[input.property]: value})}
                  value={this.state[input.property]}
                  placeholderTextColor={Theme.colorInputsPlaceholder}
                  placeholder={input.label}
               />
            )
         };

         const inputItem = (
            <View style={{width: '100%'}} key={`form-input-${i}-${j}`}>
               {inputOfType[input.valueType]}
            </View>
         )

         formInputsArray.push(inputItem);
      });

      const formPart =  (
         <View style={[Style.column_100]}>
            {formInputsArray}          
         </View>
      )

      this.setState({currentPart: formPart});
    }

    toPreviousPart = () => {
        if (this.currentPart !== 0) {
            this.currentPart--;
            this.showFormPart(this.currentPart);
        }
    }

    toNextPart = () => {
        if (this.currentPart !== this.numItems - 1) {
            this.currentPart++;
            this.showFormPart(this.currentPart);
        }
    }

    sendData = () => {
        const data = Object.assign({}, this.state);
        delete data['currentPart'];
        console.log(data);
    }
    
    componentDidMount() {
        this.showFormPart(0);
    }

    render() {
        return (
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
                style={{width: "100%"}}
            >
                <View style={Style.formPartView}>
                    <View style={Style.row}>
                        {this.state.currentPart}
                    </View>                    
                    <View style={[Style.row, Style.btnContainer, {justifyContent: 'space-between'}]}>
                        <TouchableOpacity 
                            activeOpacity={this.currentPart !== 0 ? 0.7 : 1} 
                            style={[Style.btn, this.currentPart !== 0 ? Style.btnPrimary : Style.btnDefaultDisabled, {width: "46%"}]} 
                            onPress={this.toPreviousPart}
                        >
                            <Text style={[Style.btnText, this.currentPart === 0 ? Style.btnTextDisabled : {}]}>Prev</Text>
                        </TouchableOpacity>
                        { this.currentPart !== this.numItems - 1 && 
                            <TouchableOpacity style={[Style.btn, Style.btnPrimary, {width: "46%"}]} onPress={this.toNextPart}>
                                <Text style={[Style.btnText, Style.btnPrimaryText]}>Next</Text>
                            </TouchableOpacity> 
                        }                        
                        { this.currentPart === this.numItems - 1 && 
                            <TouchableOpacity style={[Style.btn, Style.btnSuccess, {width: "46%"}]} onPress={this.sendData}>
                                <Text style={[Style.btnText, Style.btnPrimaryText]}>Sign Up</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}