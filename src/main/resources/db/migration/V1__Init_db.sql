CREATE TABLE `desk` (
  `id` bigint(20) NOT NULL,
  `desk_description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `desk_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `moderator_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `tezis` (
                         `id` bigint(20) NOT NULL,
                         `author_id` bigint(20) DEFAULT NULL,
                         `desk_id` bigint(20) DEFAULT NULL,
                         `tezis_add_date` datetime DEFAULT NULL,
                         `tezis_annotation` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
                         `tezis_change_status_date` datetime DEFAULT NULL,
                         `tezis_moderator_id` bigint(20) DEFAULT NULL,
                         `tezis_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
                         `tezis_status` int(11) DEFAULT NULL,
                         `tezis_type` int(11) DEFAULT NULL,
                         `filename` varchar(255) COLLATE utf8_bin DEFAULT NULL,
                         `random_file_name` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `tezis`
    ADD PRIMARY KEY (`id`);

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(15),
(15);


CREATE TABLE `notification` (
  `id` bigint(20) NOT NULL,
  `complite_notification_date_time` datetime DEFAULT NULL,
  `create_notification_date_time` datetime DEFAULT NULL,
  `notification_body` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `notification_recipient` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `notification_status` int(11) DEFAULT NULL,
  `notification_subject` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `source_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


CREATE TABLE `reports` (
  `id` bigint(20) NOT NULL,
  `report_annotation` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `report_status` int(11) DEFAULT NULL,
  `report_theme` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


CREATE TABLE `SPRING_SESSION` (
  `PRIMARY_ID` char(36) COLLATE utf8_bin NOT NULL,
  `SESSION_ID` char(36) COLLATE utf8_bin NOT NULL,
  `CREATION_TIME` bigint(20) NOT NULL,
  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
  `EXPIRY_TIME` bigint(20) NOT NULL,
  `PRINCIPAL_NAME` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;



CREATE TABLE `SPRING_SESSION_ATTRIBUTES` (
  `SESSION_PRIMARY_ID` char(36) COLLATE utf8_bin NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) COLLATE utf8_bin NOT NULL,
  `ATTRIBUTE_BYTES` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;


CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `roles` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;




CREATE TABLE `usr` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) DEFAULT NULL,
  `degree` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `delete_date` datetime DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `organization` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `organization_post_address` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `secname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_role` int(11) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `who_deleted` bigint(20) DEFAULT NULL,
  `notification_agree` int(11)  COLLATE utf8_bin DEFAULT NULL,
  `notificationuuid` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;




ALTER TABLE `desk`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `SPRING_SESSION`
  ADD PRIMARY KEY (`PRIMARY_ID`),
  ADD UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`),
  ADD KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`),
  ADD KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`);

ALTER TABLE `SPRING_SESSION_ATTRIBUTES`
  ADD PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`);


ALTER TABLE `user_roles`
  ADD KEY `FKg6agnwreityp2vf23bm2jgjm3` (`user_id`);

ALTER TABLE `usr`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `desk`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `tezis`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `usr`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


ALTER TABLE `SPRING_SESSION_ATTRIBUTES`
  ADD CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_PRIMARY_ID`) REFERENCES `SPRING_SESSION` (`PRIMARY_ID`) ON DELETE CASCADE;
