module Main where

import Control.Monad.Eff
import Data.DOM.Simple.Unsafe.Element
import Data.DOM.Simple.Unsafe.Events
import Data.DOM.Simple.Unsafe.Window
import Data.DOM.Simple.Types
import Data.DOM.Simple.Window
import DOM
import Prelude

main :: forall eff. Eff (dom :: DOM | eff) Unit
main = do
    element <- unsafeDocument globalWindow >>= unsafeQuerySelector "#learnerBox"
    unsafeAddEventListener "input" suggestions element

updateBadge :: forall eff. DOMEvent -> Eff (dom :: DOM | eff) Unit
updateBadge event = do
    badge <- unsafeDocument globalWindow >>= unsafeQuerySelector "#suggestions"
    input <- unsafeEventTarget event >>= unsafeValue
    unsafeSetTextContent input badge
