# volto-subsites

Volto addon to manage subsites

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

## Usage

## Usage

Simply load the addon in your project.

Put <SubsiteLoader pathname={this.props.pathname} /> wherever you want. This component loads the config for subsite and add subsite classes to body.

Get subsite data from the redux state in your components. For example:

```json
  class Header extends Component {
    class Header extends Component {
    ...
    render() {
      return (
        <>
          ...
          <SubsiteLoader pathname={this.props.pathname} />
          {this.props.subsite?.title}
        </>
      );
    }
  }
  export default connect((state) => ({
    token: state.userSession.token,
    subsite: state.content.subrequests?.subsite?.data,
  }))(Header);
  }
```
