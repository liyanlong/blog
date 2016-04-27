
CREATE TABLE `f_comment` (
  `f_comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `f_user_id` int(11) DEFAULT NULL,
  `f_parent_comment_id` int(11) DEFAULT NULL,
  `f_comment_content` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`f_comment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8