import { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { registerApp, sendAuthRequest, isWXAppInstalled } from 'react-native-wechat-lib';

import { HStack, VStack, Button, ButtonIcon, ButtonText, useToast, Toast, ToastTitle, ToastDescription } from '@gluestack-ui/themed';
import { ROUTE_SCREEN } from '@/const/routes';
import { WeChat } from '@/icon';


export default function Login() {
  const navigation = useNavigation();
  const toast = useToast();

  const weChatLogin = async () => {
    try {
      const isInstalled = await isWXAppInstalled();
      if (isInstalled) {
        let scope = 'snsapi_userinfo';
        let state = 'wechat_sdk_demo';
        try {
          const response = await sendAuthRequest(scope, state);
          toast.show({
            placement: 'top',
            duration: 3000,
            render: ({ id }) => {
              return <Toast nativeID={`toast-${id}`} action="success" variant='solid'>
                <VStack space="xs">
                  <ToastTitle>授权成功</ToastTitle>
                  <ToastDescription>
                    token: {response.code}
                  </ToastDescription>
                </VStack>
              </Toast>
            },
            onCloseComplete: () => {
              navigation.navigate(ROUTE_SCREEN.HOME);
            }
          })
        } catch (e) {
          toast.show({
            placement: 'top',
            render: ({ id }) => {
              return <Toast nativeID={`toast-${id}`} action="error" variant='solid'>
                <VStack space="xs">
                  <ToastTitle>授权失败</ToastTitle>
                  <ToastDescription>
                    请重新使用微信登录
                  </ToastDescription>
                </VStack>
              </Toast>
            }
          })
        }
      } else {

      }
    } catch(e) {

    }
  }

  useEffect(() => {
    try {
      registerApp('wx3aa8bf86a91a2b5c');
    } catch(e) {

    }
  }, []);
  return <SafeAreaView style={styles.container}>
      <HStack justifyContent='center'>
        <Button
          w="80%"
          onPress={weChatLogin}
          size="lg"
          action="positive"
          accessibilityLabel="登录"
        >
          <ButtonIcon as={WeChat} />
          <ButtonText ml="$2">微信登录</ButtonText>
        </Button>
      </HStack>
  </SafeAreaView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 60,
  }
})
