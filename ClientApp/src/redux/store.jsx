import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();
const middleware = [ thunk ];
// check nếu không phải production thì push logger vào để log ra những action
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
//rootReducer
//init value : 
//enhancers: cấu hình middleware 
//kho chung  store