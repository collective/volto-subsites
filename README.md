# volto-subsites

Volto addon to manage subsites

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

## Usage

Simply load the addon in your project.

Put <SubsiteLoader pathname={this.props.pathname} /> wherever you want. This component loads the config for subsite and add subsite classes to body.
Suggest component where to put the subsite loader is the customized AppExtras component from volto.

Get subsite data from the redux state in your components. For example:

```js
import React from 'React';
import { connect } from 'react-redux';
import { SubsiteLoader } from 'volto-subsites';

const AppExtras = ({ pathname }) => {
  return (
    <>
      <SubsiteLoader pathname={pathname} />
    </>
  );
};

export default connect(
  (state, props) => ({
    pathname: props.location?.pathname,
  }),
  {},
)(AppExtras);
```

```js
class Header extends Component {
  //...
  render() {
    return (
      <>
        //...
        {this.props.subsite?.title}
      </>
    );
  }
}
export default connect(state => ({
  token: state.userSession.token,
  subsite: state.subsite?.data,
}))(Header);
```
