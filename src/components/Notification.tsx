// @ts-nocheck
import { TiInfoLargeOutline, TiWarningOutline } from 'react-icons/ti'
import { showNotification, updateNotification, hideNotification, cleanNotifications, cleanNotificationsQueue } from "@mantine/notifications"

interface IMessage {
    type: string;

    payload: {
        id?: string;
        title?: string;
        color?: string;
        message?: string;
        loading?: boolean;
        notificationType?: string;
        radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }
}

export const Notification = () => {
    const notificationTypes = {
        success: {
            color: 'teal',
            icon: <TiInfoLargeOutline />
        },

        info: {
            color: 'blue',
            icon: <TiInfoLargeOutline />
        },

        warning: {
            color: 'yellow',
            icon: <TiWarningOutline />
        },

        error: {
            color: 'red',
            icon: <TiWarningOutline />
        }
    }

    window.addEventListener("message", ({ data: { payload: { id, title, message, loading, notificationType, radius = 'md', color }, type }}: { data: IMessage }) => {
        switch ( type ) {
            case "createNotification":
                showNotification({
                    id,
                    title,
                    radius,
                    message,
                    loading,
                    disallowClose: true,
                    autoClose: ( loading ) ? false : true,
                    icon: notificationTypes[ notificationType ]?.icon ?? null,
                    color: notificationTypes[ notificationType ]?.color ?? color,
                })

                break;
            
            case 'updateNotification':
                updateNotification({
                    id: id ?? '',
                    title,
                    radius,
                    message,
                    loading,
                    disallowClose: true,
                    autoClose: ( loading ) ? false : true,
                    icon: notificationTypes[ notificationType ]?.icon ?? null,
                    color: notificationTypes[ notificationType ]?.color ?? color,
                })

                break;

            case 'removeNotification':
                hideNotification(id ?? '')
                break;
            
            case 'clearQueue':
                cleanNotificationsQueue()
                break;

            case 'removeAll':
                cleanNotifications()
                break;
        
            default:
                break 
        }
    })

    return null
};