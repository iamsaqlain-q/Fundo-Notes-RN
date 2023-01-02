import PushNotification from 'react-native-push-notification';

class Notifications {
  constructor() {
    PushNotification.configure({
      onRegister: function (token) {
        //console.log('TOKEN', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION', notification);
      },
      popInitialNotification: true,
      requestPermissions: false,
    });
    PushNotification.createChannel(
      {
        channelId: 'reminders',
        channelName: 'Task Reminder Notification',
        channelDescription: 'Reminder for any task',
      },
      () => {},
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      //console.log('SN ---', rn);
    });
  }
  schduleNotification(date) {
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: 'Reminder!',
      message: 'You have set this reminder',
      date,
    });
  }

  cancelNotification(date) {
    PushNotification.cancelLocalNotification({id: 'reminders'});
  }
}

export default new Notifications();
