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
  schduleNotification(date, id) {
    PushNotification.localNotificationSchedule({
      id: id,
      channelId: 'reminders',
      title: 'Reminder!',
      message: 'You have set this reminder',
      date: date,
    });
  }

  cancelReminder(id) {
    PushNotification.cancelLocalNotification(id);
  }
}

export default new Notifications();
