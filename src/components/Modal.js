import { View, Text, Modal as RNmodal, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'

const Modal = ({isOpen, withInput, children, ...rest}) => {
    const content = withInput ? (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {children}
        </KeyboardAvoidingView>
    ) : (
        <View style={styles.container}>
            {children}
        </View>
    )


  return (
    <RNmodal
        visible={isOpen}
        transparent
        animationType="fade"
        statusBarTranslucent
        {...rest}
    >
        {content}
    </RNmodal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 3,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
})

export default Modal