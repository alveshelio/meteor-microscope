import './posts_list.html';

var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'Discover Meteor Updated',
    url: 'http://discovermeteor.com'
  }
];

Template.postsList.helpers({
  posts:postsData
});