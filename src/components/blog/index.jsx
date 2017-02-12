import "./blog.tpl.php";
import "./index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {find, get} from "lodash";
import contentful from "contentful";
import marked from "marked";
import "slick-carousel";
import "slick-carousel/slick/slick.scss";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function () {
  const programme = document.querySelector('.blog');
  if (programme) {
    const c = contentful.createClient({
      space: 'jj1c1wypdolp',
      accessToken: 'd595f6ca9e28716e07f6d5d55cb20a041376157ae7d7653518ed8be45ef8ceeb',
    });

    c.getEntries().then(e => {
      ReactDOM.render(
        <PostList posts={e.items}/>, programme);
    });
  }
});

function Post({title, body, photos}) {
  const bodyHtml = marked(body);
  return <div className="blog__post">
    <div className="blog__post-body">
      <h1>{title}</h1>
      <div className="blog__post-body-text" dangerouslySetInnerHTML={{__html: bodyHtml}}></div>
    </div>
    {photos.length && <PostPhotos photos={photos}/> }
  </div>
}

function PostList({posts}) {
  return <div className="blog__post-list">
    {posts.map(({fields: {title, body, photos}, sys: {id}}) =>
      <Post key={id} title={title} body={body} photos={photos}/>)}
  </div>
}

class PostPhotos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: false,
      modalIsOpen: false
    }
  }
  render() {
    return <div>
      <Modal isOpen={this.state.modalIsOpen} onClose={() => {this.setState({modalIsOpen: false})}}>
        <Carousel photos={this.props.photos} selectedImage={this.state.selectedImage} />
      </Modal>
      <ul className="blog__post-photos">
      {this.props.photos.map(photo =>
        <li key={photo.sys.id} className="blog__post-photo-item" onClick={() => this.setState({modalIsOpen: true, selectedImage: photo})}>
          <img src={blogImageThumbnail(get(photo, 'fields.file.url'))} className="blog__post-photo"/>
        </li>)}
    </ul></div>;
  }
}

// This one is going to render those images inside the modal. You'll do <modal><carousel>...
// It'll have a "selected" image state that you can also set outside the slider.
class Carousel extends React.Component {
  componentDidMount() {
    $(this.element)
      .slick({
        lazyLoad: 'ondemand',
        initialSlide: $('[data-is-default=true]', this.element).index(),
      })
      // Focusing something is enough to make keyboard shortcuts work straight away.
      .find('li:first').focus();
  }

  componentWillUnmount() {
    $(this.element).slick('unslick');
  }

  render() {
    return <ul ref={element => this.element = element} className="carousel">
      {this.props.photos.map(photo =>
        <li className="carousel__item" data-is-default={this.props.selectedImage && this.props.selectedImage === photo}>
          <img className="carousel__image" key={photo.sys.id} src={fullscreenImageThumbnail(get(photo, 'fields.file.url'))} />
        </li>
      )}
    </ul>;
  }
}

// TODO This one's going to be responsible for producing the overlay
// and a space for the images inside it.
// It'll also include a close button. (Be cool if it could do something with the history API for back button users.
// It's definitely a standalone component.

class Modal extends React.Component {

  // TODO HIstory API and escape key
  // Or use a modal plugin :)

  componentDidMount() {
    document.body.classList.toggle('modal--is-open', this.props.isOpen)
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('modal--is-open', nextProps.isOpen)
  }
  componentWillUnmount() {
    document.body.classList.remove('modal--is-open')
  }

  render() {
    return this.props.isOpen &&
      <div className="modal" onClick={() => {this.props.onClose()}}>
        <div className="modal__content" onClick={(e) => {e.stopPropagation()}}>
          {this.props.children}
        </div>
        <button className="modal__close" onClick={() => {this.props.onClose()}}>&times;</button>
      </div>
  }
}

function blogImageThumbnail(url) {
  return url + '?w=510&h=300&fit=fill';
}

function fullscreenImageThumbnail(url) {
  return url + '?w=1024&h=1024';
}
