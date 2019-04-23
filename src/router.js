import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

const routes = [
  // Main pages
  { name: 'homepage', path: '/' },
];

const moveToTopOfThePagePlugin = (router, dependencies) => ({
  onTransitionStart: (toState, fromState) => {
    window.scroll(0,0);
    window.scrollTo(0, 0);
  }
});

moveToTopOfThePagePlugin.pluginName = 'MOVE_TO_THE_TOP_OF_THE_PAGE';
  
const router = createRouter(routes)
  .usePlugin(browserPlugin())
  .usePlugin(moveToTopOfThePagePlugin);;

router.start()

export default router;
