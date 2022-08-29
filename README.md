# volto-subsites

Volto addon to manage subsites.  
Intended to be used with [collective.volto.subsites](https://github.com/collective/collective.volto.subsites/).

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/addons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

## Usage

> If you're using Volto < 12, then use [v1.1.0](https://github.com/collective/volto-subsites/tree/v1.1.0)

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
  subsite: state.content?.data?.['@components']?.subsite;
}))(Header);
```

