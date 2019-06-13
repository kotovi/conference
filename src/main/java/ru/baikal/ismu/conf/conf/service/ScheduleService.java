package ru.baikal.ismu.conf.conf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.baikal.ismu.conf.conf.domain.Notification;
import ru.baikal.ismu.conf.conf.repos.NotificationRepo;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class ScheduleService {
    @Autowired
    NotificationRepo notificationRepo;
    @Autowired
    MailSender mailSender;

    @Scheduled(fixedRate = 60000)
    public void mailNotificator(){
        //рассылаем уведомления
        List<Notification> notification = notificationRepo.findByNotificationStatus(0);
        
        if (notification.size() > 0) {
            mailSender.send(notification.get(0).getNotificationRecipient(),notification.get(0).getNotificationSubject(),
                    notification.get(0).getNotificationBody());
            notification.get(0).setNotificationStatus(1);
            notification.get(0).setCompliteNotificationDateTime(LocalDateTime.now());
           // notification.get(0).setNotificationBody("учетные данные отправлены");
            notificationRepo.save(notification.get(0));

        }
    }

}
