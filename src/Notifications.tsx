import { MantineProvider } from '@mantine/core'
import { Notification } from './components/Notification'
import { NotificationsProvider } from '@mantine/notifications'
import './style.css'

export const Notifications = () => {
  return (
    <MantineProvider
        theme={{
            colorScheme: 'dark'
        }}
    >
        <NotificationsProvider
            limit={ 4 }
            autoClose={ 2500 }
            position="bottom-right"
        >
            <Notification />    
        </NotificationsProvider>
    </MantineProvider>
  );
}