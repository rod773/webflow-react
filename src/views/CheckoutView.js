/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("../d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c82a02.js?site=6536d7f1a8739ee6bf858159").then(body => body.text()), isAsync: false },
  { loading: fetch("../assets-global.website-files.com/6536d7f1a8739ee6bf858159/js/webflow.0133f7669.js").then(body => body.text()), isAsync: false },
]

let Controller

class CheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/CheckoutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CheckoutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfDomain'] = 'rodrigos-superb-site-69d203.webflow.io'
    htmlEl.dataset['wfPage'] = '6536d7f1a8739ee6bf85819c'
    htmlEl.dataset['wfSite'] = '6536d7f1a8739ee6bf858159'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = CheckoutView.Controller !== CheckoutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\assets-global.website-files.com\\6536d7f1a8739ee6bf858159\\css\\rodrigos-superb-site-69d203.webflow.b928816aa.css);
        ` }} />
        <span className="af-view">
          <div><div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav"><div className="af-class-navigation-items"><a href="index.html" className="af-class-logo-link w-nav-brand"><img src="../assets-global.website-files.com/5c6eefaaeddf9248ac13bc72/5c6ef116eddf92775813c297_store-logo%402x.png" width={65} alt className="af-class-logo-image" /></a><div className="af-class-navigation-wrap"><nav role="navigation" className="af-class-navigation-items w-nav-menu"><a href="products.html" className="af-class-navigation-item w-nav-link">Products</a><a href="about.html" className="af-class-navigation-item w-nav-link">About</a><a href="contact.html" className="af-class-navigation-item w-nav-link">Contact</a></nav><div data-node-type="commerce-cart-wrapper" data-open-product data-wf-cart-type="rightSidebar" data-wf-cart-query="query Dynamo2 {
          database {
            id
            commerceOrder {
        comment
        extraItems {
          name
          pluginId
          pluginName
          price {
            value
            unit
            decimalValue
            string
          }
        }
        id
        startedOn
        statusFlags {
          hasDownloads
          hasSubscription
          isFreeOrder
          requiresShipping
        }
        subtotal {
          value
          unit
          decimalValue
          string
        }
        total {
          value
          unit
          decimalValue
          string
        }
        updatedOn
        userItems {
          count
          id
          product {
            id
            cmsLocaleId
            f__draft_0ht
            f__archived_0ht
            f_name_
            f_sku_properties_3dr {
              id
              name
              enum {
                id
                name
                slug
              }
            }
          }
          rowTotal {
            value
            unit
            decimalValue
            string
          }
          sku {
            cmsLocaleId
            f__draft_0ht
            f__archived_0ht
            f_main_image_4dr {
              url
              file {
                size
                origFileName
                createdOn
                updatedOn
                mimeType
                width
                height
                variants {
                  origFileName
                  quality
                  height
                  width
                  s3Url
                  error
                  size
                }
              }
              alt
            }
            f_price_ {
              value
              unit
              decimalValue
              string
            }
            f_sku_values_3dr {
              property {
                id
              }
              value {
                id
              }
            }
            id
          }
          subscriptionFrequency
          subscriptionInterval
          subscriptionTrial
        }
        userItemsCount
            }
          }
          site {
            id
            commerce {
        businessAddress {
          country
        }
        defaultCountry
        defaultCurrency
        quickCheckoutEnabled
            }
          }
        }
        " data-wf-page-link-href-prefix className="w-commerce-commercecartwrapper af-class-cart"><a href="#" data-node-type="commerce-cart-open-link" className="w-commerce-commercecartopenlink af-class-button af-class-cc-cart w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><div className="w-inline-block">Cart</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" className="w-commerce-commercecartopenlinkcount af-class-cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"><div data-node-type="commerce-cart-container" role="dialog" className="w-commerce-commercecartcontainer af-class-cart-container"><div className="w-commerce-commercecartheader af-class-cart-header"><h4 className="af-class-heading-jumbo-tiny">your cart</h4><a href="#" data-node-type="commerce-cart-close-link" className="w-commerce-commercecartcloselink af-class-close-button w-inline-block" role="button" aria-label="Close cart"><img src="https://assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581ba_close-icon.svg" alt className="af-class-icon" /></a></div><div className="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style={{display: 'none'}} className="w-commerce-commercecartform"><div className="w-commerce-commercecartlist af-class-cart-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"><div className="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="#" alt className="w-commerce-commercecartitemimage w-dyn-bind-empty" /><div className="w-commerce-commercecartiteminfo af-class-cart-item-info-wrap"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" className="w-commerce-commercecartproductname af-class-product-name-text af-class-cc-name-text-cart w-dyn-bind-empty" /><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_price_%22%7D%7D%5D">$&nbsp;0.00&nbsp;USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecartoptionlist af-class-cart-option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb86"><li className="af-class-cart-option-wrap"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" /><span>: </span><span className="af-class-option-item-value" data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" /></li></ul><a href="#" role data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" className="af-class-remove-button w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id aria-label="Remove item from cart"><div className="af-class-label af-class-cc-cart-remove-link">Remove</div></a></div><input type="number" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" className="w-commerce-commercecartquantity af-class-text-field" required pattern="^[0-9]+$" inputMode="numeric" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id defaultValue={1} /></div></div><div className="w-commerce-commercecartfooter af-class-cart-footer"><div aria-live aria-atomic="false" className="w-commerce-commercecartlineitem af-class-cart-line-item"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" className="w-commerce-commercecartordervalue af-class-paragraph-bigger" /></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style={{display: 'none'}}><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton af-class-apple-pay" tabIndex={0}><div /></a><a role="button" tabIndex={0} aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton af-class-pay-with-browser"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" /><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" /></defs><g fill="none" fillRule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" /><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" /><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlinkHref="#google-mark-a" /></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" /></g><mask id="google-mark-d" fill="#fff"><use xlinkHref="#google-mark-c" /></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" /></g></svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1" /><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" /><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" /><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" /></g></svg><div>Pay with browser.</div></a></div><div data-wf-paypal-button="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;color&quot;:&quot;black&quot;,&quot;shape&quot;:&quot;rect&quot;,&quot;label&quot;:&quot;paypal&quot;,&quot;tagline&quot;:false,&quot;note&quot;:false}" /><a href="checkout.html" value="Continue to Checkout" data-node-type="cart-checkout-button" className="w-commerce-commercecartcheckoutbutton af-class-button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div className="w-commerce-commercecartemptystate"><div className="af-class-paragraph-light">No items found.</div></div><div aria-live style={{display: 'none'}} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate af-class-status-message af-class-cc-error-message"><div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><div className="af-class-menu-button w-nav-button"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b8_menu-icon.png" width={22} alt className="af-class-menu-icon" /></div></div></div></div><div data-node-type="commerce-checkout-form-container" data-wf-checkout-query="query Dynamo2 {
          database {
            id
            commerceOrder {
        availableShippingMethods {
          description
          id
          mode
          name
          price {
            value
            unit
            decimalValue
            string
          }
          selected
        }
        comment
        customData {
          checkbox
          name
          textArea
          textInput
        }
        customerInfo {
          billingAddress {
            addressee
            city
            country
            japanType
            line1
            line2
            postalCode
            state
            type
          }
          identity {
            email
            fullName
          }
          shippingAddress {
            addressee
            city
            country
            japanType
            line1
            line2
            postalCode
            state
            type
          }
          stripePayment {
            card {
              expires {
                month
                year
              }
              last4
              provided
              provider
            }
          }
        }
        downloadFiles {
          id
          name
          url
        }
        extraItems {
          name
          pluginId
          pluginName
          price {
            value
            unit
            decimalValue
            string
          }
        }
        id
        paymentProcessor
        startedOn
        statusFlags {
          billingAddressRequiresPostalCode
          hasDownloads
          hasSubscription
          isFreeOrder
          needAddress
          needIdentity
          needItems
          needPayment
          requiresShipping
          shippingAddressRequiresPostalCode
          shouldRecalc
        }
        subtotal {
          value
          unit
          decimalValue
          string
        }
        total {
          value
          unit
          decimalValue
          string
        }
        updatedOn
        userItems {
          count
          id
          product {
            id
            cmsLocaleId
            f__draft_0ht
            f__archived_0ht
            f_name_
            f_sku_properties_3dr {
              id
              name
              enum {
                id
                name
                slug
              }
            }
          }
          rowTotal {
            value
            unit
            decimalValue
            string
          }
          sku {
            cmsLocaleId
            f__draft_0ht
            f__archived_0ht
            f_main_image_4dr {
              url
              file {
                size
                origFileName
                createdOn
                updatedOn
                mimeType
                width
                height
                variants {
                  origFileName
                  quality
                  height
                  width
                  s3Url
                  error
                  size
                }
              }
              alt
            }
            f_sku_values_3dr {
              property {
                id
              }
              value {
                id
              }
            }
            id
          }
          subscriptionFrequency
          subscriptionInterval
          subscriptionTrial
        }
        userItemsCount
            }
          }
          site {
            id
            commerce {
        businessAddress {
          country
        }
        defaultCountry
        defaultCurrency
        quickCheckoutEnabled
            }
          }
        }
        " data-wf-page-link-href-prefix className="w-commerce-commercecheckoutformcontainer af-class-full-width-form"><div className="af-class-container af-class-cc-full-width-form-wrap"><div className="w-commerce-commercelayoutmain af-class-order-wrap"><div data-wf-paypal-button="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;color&quot;:&quot;black&quot;,&quot;shape&quot;:&quot;rect&quot;,&quot;label&quot;:&quot;paypal&quot;,&quot;tagline&quot;:false,&quot;note&quot;:false}" /><div data-node-type="commerce-cart-quick-checkout-actions" style={{display: 'none'}}><a data-node-type="commerce-cart-apple-pay-button" role="button" aria-haspopup="dialog" aria-label="Apple Pay" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton" tabIndex={0}><div /></a><a data-node-type="commerce-cart-quick-checkout-button" role="button" tabIndex={0} aria-haspopup="dialog" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" /><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" /></defs><g fill="none" fillRule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" /><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" /><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlinkHref="#google-mark-a" /></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" /></g><mask id="google-mark-d" fill="#fff"><use xlinkHref="#google-mark-c" /></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" /></g></svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1" /><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" /><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" /><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" /></g></svg><div>Pay with browser.</div></a></div><div className="w-commerce-commercecheckoutorderitemswrapper"><div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Items in Order</h4></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><div role="list" className="w-commerce-commercecheckoutorderitemslist af-class-order-item-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-992b7cac-1ae1-ef14-d4d9-dd177e5dd9e3"><div role="listitem" className="w-commerce-commercecheckoutorderitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="#" alt className="w-commerce-commercecartitemimage w-dyn-bind-empty" /><div className="w-commerce-commercecheckoutorderitemdescriptionwrapper"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" className="w-commerce-commerceboldtextblock af-class-product-name-text af-class-cc-name-text-cart w-dyn-bind-empty" /><div className="w-commerce-commercecheckoutorderitemquantitywrapper af-class-checkout-quantity-wrap"><div>Quantity:</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%5D">1</div></div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecheckoutorderitemoptionlist af-class-option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-992b7cac-1ae1-ef14-d4d9-dd177e5dd9ec"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" /><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" /></li></ul></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.rowTotal%22%7D%7D%5D" className="af-class-order-item-price">$&nbsp;0.00&nbsp;USD</div></div></div></fieldset></div><form data-node-type="commerce-checkout-customer-info-wrapper" className="w-commerce-commercecheckoutcustomerinfowrapper"><div className="w-commerce-commercecheckoutblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Customer Info</h4><div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">* Required</div></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label htmlFor className="w-commerce-commercecheckoutlabel">Email *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.customerEmail%22%7D%7D%5D" className="w-commerce-commercecheckoutemailinput af-class-text-field" name="email" required /></fieldset></form><form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-address-wrapper" className="w-commerce-commercecheckoutshippingaddresswrapper"><div className="w-commerce-commercecheckoutblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Shipping Address</h4><div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">* Required</div></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label htmlFor className="w-commerce-commercecheckoutlabel">Full Name *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressAddressee%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingfullname af-class-text-field" name="name" required /><label htmlFor className="w-commerce-commercecheckoutlabel">Street Address *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine1%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstreetaddress af-class-text-field" name="address_line1" required /><input type="text" aria-label data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine2%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstreetaddressoptional af-class-text-field" name="address_line2" /><div className="w-commerce-commercecheckoutrow"><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">City *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCity%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingcity af-class-text-field" name="address_city" required /></div><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">State/Province</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressState%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstateprovince af-class-text-field" name="address_state" /></div><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">Zip/Postal Code *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-shipping-zip-field" className="w-commerce-commercecheckoutshippingzippostalcode af-class-text-field" name="address_zip" required /></div></div><label htmlFor className="w-commerce-commercecheckoutlabel">Country *</label><select data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCountry%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingcountryselector af-class-select" name="address_country"><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="CV">Cabo Verde</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></fieldset></form><form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper"><div className="w-commerce-commercecheckoutblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Shipping Method</h4></div><fieldset><div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist af-class-shipping-method-list" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-992b7cac-1ae1-ef14-d4d9-dd177e5dd99f"><label className="w-commerce-commercecheckoutshippingmethoditem af-class-shipping-method"><input type="radio" required data-wf-bindings="%5B%7B%22id%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22checked%22%3A%7B%22type%22%3A%22Bool%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.selected%22%7D%7D%5D" name="shipping-method-choice" /><div className="w-commerce-commercecheckoutshippingmethoddescriptionblock"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.name%22%7D%7D%5D" className="w-commerce-commerceboldtextblock af-class-product-name-text af-class-cc-shipping-option w-dyn-bind-empty" /><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.description%22%7D%7D%5D" className="af-class-paragraph-light w-dyn-bind-empty" /></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.price%22%7D%7D%5D" className="af-class-order-item-price">$&nbsp;0.00&nbsp;USD</div></label></div><div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{display: 'none'}} className="w-commerce-commercecheckoutshippingmethodsemptystate"><div>No shipping methods are available for the address given.</div></div></fieldset></form><div className="w-commerce-commercecheckoutpaymentinfowrapper"><div className="w-commerce-commercecheckoutblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Payment Info</h4><div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">* Required</div></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label htmlFor className="w-commerce-commercecheckoutlabel">Card Number *</label><div data-wf-stripe-element-type="cardNumber" data-wf-style-map="{}" className="w-commerce-commercecheckoutcardnumber af-class-text-field"><div /></div><div className="w-commerce-commercecheckoutrow"><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">Expiration Date *</label><div data-wf-stripe-element-type="cardExpiry" data-wf-style-map="{}" className="w-commerce-commercecheckoutcardexpirationdate af-class-text-field"><div /></div></div><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">Security Code *</label><div data-wf-stripe-element-type="cardCvc" data-wf-style-map="{}" className="w-commerce-commercecheckoutcardsecuritycode af-class-text-field"><div /></div></div></div><div data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" className="w-commerce-commercecheckoutbillingaddresstogglewrapper af-class-billing-address-toggle-2"><input type="checkbox" id="checkbox" data-node-type="commerce-checkout-billing-address-toggle-checkbox" className="w-commerce-commercecheckoutbillingaddresstogglecheckbox af-class-checkbox-2" defaultChecked /><label htmlFor="checkbox" className="w-commerce-commercecheckoutbillingaddresstogglelabel af-class-checkbox-label-2">Billing address same as shipping</label></div></fieldset></div><form data-node-type="commerce-checkout-billing-address-wrapper" style={{display: 'none'}} className="w-commerce-commercecheckoutbillingaddresswrapper"><div className="w-commerce-commercecheckoutblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Billing Address</h4><div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">* Required</div></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label htmlFor className="w-commerce-commercecheckoutlabel">Full Name *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressAddressee%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingfullname af-class-text-field" name="name" required /><label htmlFor className="w-commerce-commercecheckoutlabel">Street Address *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine1%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstreetaddress af-class-text-field" name="address_line1" required /><input type="text" aria-label data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine2%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstreetaddressoptional af-class-text-field" name="address_line2" /><div className="w-commerce-commercecheckoutrow"><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">City *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCity%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingcity af-class-text-field" name="address_city" required /></div><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">State/Province</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressState%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstateprovince af-class-text-field" name="address_state" /></div><div className="w-commerce-commercecheckoutcolumn"><label htmlFor className="w-commerce-commercecheckoutlabel">Zip/Postal Code *</label><input type="text" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-billing-zip-field" className="w-commerce-commercecheckoutbillingzippostalcode af-class-text-field" name="address_zip" required /></div></div><label htmlFor className="w-commerce-commercecheckoutlabel">Country *</label><select data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCountry%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingcountryselector af-class-select" name="address_country"><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="CV">Cabo Verde</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option selected value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></fieldset></form></div><div className="w-commerce-commercelayoutsidebar af-class-order-summary"><div className="w-commerce-commercecheckoutordersummarywrapper"><div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header"><h4 className="af-class-heading-jumbo-tiny">Order Summary</h4></div><fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><div className="w-commerce-commercecheckoutsummarylineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" /></div><div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-992b7cac-1ae1-ef14-d4d9-dd177e5dd9fd"><div className="w-commerce-commercecheckoutordersummaryextraitemslistitem"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.name%22%7D%7D%5D" className="w-dyn-bind-empty" /><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.price%22%7D%7D%5D">$&nbsp;0.00&nbsp;USD</div></div></div><div className="w-commerce-commercecheckoutsummarylineitem"><div>Total</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.total%22%7D%7D%5D" className="w-commerce-commercecheckoutsummarytotal af-class-total-count-text" /></div></fieldset></div><a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton af-class-button" data-loading-text="Placing Order...">Place Order</a><div data-node-type="commerce-checkout-error-state" style={{display: 'none'}} className="w-commerce-commercecheckouterrorstate"><div aria-live="polite" className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue." data-w-extras-error="Taxes or shipping methods have changed. Please refresh this page and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div></div></div></div></div><div className="af-class-section"><div className="af-class-container"><div className="w-layout-grid af-class-footer"><a href="index.html" id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971b-87e29718" className="af-class-logo-link w-inline-block"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b7_store-logo%402x.png" width={65} alt className="af-class-logo-footer" /></a><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971d-87e29718" className="af-class-label">Menu</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971f-87e29718" className="af-class-links-section-footer"><a href="index.html" className="af-class-footer-link">Home</a><a href="about.html" className="af-class-footer-link">About</a><a href="contact.html" className="af-class-footer-link">Contact</a><a href="products.html" className="af-class-footer-link">Products</a><a href="blog.html" className="af-class-footer-link">Blog</a><a href="styleguide.html" className="af-class-footer-link">Styleguide</a></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29724-87e29718" className="af-class-label">Categories</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29726-87e29718" className="af-class-links-section-footer"><div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a href="category/category-1.html" className="af-class-footer-link">Category 1</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-2.html" className="af-class-footer-link">Category 2</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-3.html" className="af-class-footer-link">Category 3</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-4.html" className="af-class-footer-link">Category 4</a></div></div></div></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972d-87e29718" className="af-class-label">Help</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972f-87e29718" className="af-class-links-section-footer"><a href="contact.html" className="af-class-footer-link">Shipping</a><a href="contact.html" className="af-class-footer-link">Returns &amp; Exchange</a><a href="contact.html" className="af-class-footer-link">Product Care</a></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29736-87e29718" className="af-class-label">Follow</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29738-87e29718" className="af-class-links-section-footer"><a href="https://www.instagram.com/webflowapp/" target="_blank" className="af-class-footer-link">Instagram</a><a href="https://www.facebook.com/webflow/" target="_blank" className="af-class-footer-link">Facebook</a><a href="https://twitter.com/webflow" target="_blank" className="af-class-footer-link">Twitter</a></div><a id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2973f-87e29718" href="https://webflow.com/" target="_blank" className="af-class-made-with-webflow w-inline-block"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b9_webflow-w-small%402x.png" width={15} alt className="af-class-webflow-logo-tiny" /><div className="af-class-paragraph-tiny">Powered by Webflow</div></a></div></div></div>
          </div>
        </span>
      </span>
    )
  }
}

export default CheckoutView

/* eslint-enable */