var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
      <div className={'contactItem'}>
      <img className={'contactImage'} src={'link-do-obrazka.png'}/>
      <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
      </p>
      <p className={'contactLabel'}>
        Nazwisko: {this.props.contact.lastName}
      </p>
      <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
      </a>
      </div>
  },
});