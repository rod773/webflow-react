/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("../d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c82a02.js?site=6536d7f1a8739ee6bf858159").then(body => body.text()), isAsync: false },
  { loading: fetch("../assets-global.website-files.com/6536d7f1a8739ee6bf858159/js/webflow.0133f7669.js").then(body => body.text()), isAsync: false },
]

let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfDomain'] = 'rodrigos-superb-site-69d203.webflow.io'
    htmlEl.dataset['wfPage'] = '6536d7f1a8739ee6bf85819b'
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
    const proxies = BlogView.Controller !== BlogView ? transformProxies(this.props.children) : {

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
        " data-wf-page-link-href-prefix className="w-commerce-commercecartwrapper af-class-cart"><a href="#" data-node-type="commerce-cart-open-link" className="w-commerce-commercecartopenlink af-class-button af-class-cc-cart w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><div className="w-inline-block">Cart</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" className="w-commerce-commercecartopenlinkcount af-class-cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"><div data-node-type="commerce-cart-container" role="dialog" className="w-commerce-commercecartcontainer af-class-cart-container"><div className="w-commerce-commercecartheader af-class-cart-header"><h4 className="af-class-heading-jumbo-tiny">your cart</h4><a href="#" data-node-type="commerce-cart-close-link" className="w-commerce-commercecartcloselink af-class-close-button w-inline-block" role="button" aria-label="Close cart"><img src="https://assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581ba_close-icon.svg" alt className="af-class-icon" /></a></div><div className="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style={{display: 'none'}} className="w-commerce-commercecartform"><div className="w-commerce-commercecartlist af-class-cart-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb80"><div className="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="#" alt className="w-commerce-commercecartitemimage w-dyn-bind-empty" /><div className="w-commerce-commercecartiteminfo af-class-cart-item-info-wrap"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" className="w-commerce-commercecartproductname af-class-product-name-text af-class-cc-name-text-cart w-dyn-bind-empty" /><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_price_%22%7D%7D%5D">$&nbsp;0.00&nbsp;USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecartoptionlist af-class-cart-option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-338fcf85-0add-3b81-68ce-59ae991bfb86"><li className="af-class-cart-option-wrap"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" /><span>: </span><span className="af-class-option-item-value" data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" /></li></ul><a href="#" role data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" className="af-class-remove-button w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id aria-label="Remove item from cart"><div className="af-class-label af-class-cc-cart-remove-link">Remove</div></a></div><input type="number" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" className="w-commerce-commercecartquantity af-class-text-field" required pattern="^[0-9]+$" inputMode="numeric" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id defaultValue={1} /></div></div><div className="w-commerce-commercecartfooter af-class-cart-footer"><div aria-live aria-atomic="false" className="w-commerce-commercecartlineitem af-class-cart-line-item"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" className="w-commerce-commercecartordervalue af-class-paragraph-bigger" /></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style={{display: 'none'}}><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton af-class-apple-pay" tabIndex={0}><div /></a><a role="button" tabIndex={0} aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton af-class-pay-with-browser"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" /><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" /></defs><g fill="none" fillRule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" /><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" /><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlinkHref="#google-mark-a" /></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" /></g><mask id="google-mark-d" fill="#fff"><use xlinkHref="#google-mark-c" /></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" /></g></svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1" /><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" /><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" /><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" /></g></svg><div>Pay with browser.</div></a></div><div data-wf-paypal-button="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;color&quot;:&quot;black&quot;,&quot;shape&quot;:&quot;rect&quot;,&quot;label&quot;:&quot;paypal&quot;,&quot;tagline&quot;:false,&quot;note&quot;:false}" /><a href="checkout.html" value="Continue to Checkout" data-node-type="cart-checkout-button" className="w-commerce-commercecartcheckoutbutton af-class-button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div className="w-commerce-commercecartemptystate"><div className="af-class-paragraph-light">No items found.</div></div><div aria-live style={{display: 'none'}} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate af-class-status-message af-class-cc-error-message"><div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><div className="af-class-menu-button w-nav-button"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b8_menu-icon.png" width={22} alt className="af-class-menu-icon" /></div></div></div></div><div className="af-class-section"><div className="af-class-container af-class-cc-heading-wrap"><h1>Our Stories</h1><div className="af-class-paragraph-bigger af-class-cc-bigger-light">Harum et neque voluptate voluptatem</div></div></div><div className="af-class-section"><div className="af-class-container"><div className="w-dyn-list"><div role="list" className="af-class-blog-list-wrap w-dyn-items"><div role="listitem" className="af-class-blog-item w-dyn-item"><a style={{backgroundImage: 'url(_https_/assets-global.website-files.com/6536d7f1a8739ee6bf8581b6/6536d7f1a8739ee6bf858212_portfolio%201%20-%20wide.html)'}} href="post/7-of-the-best-examples-of-beautiful-blog-design.html" className="af-class-blog-preview-image w-inline-block" /><div className="af-class-blog-summary-wrap"><a href="post/7-of-the-best-examples-of-beautiful-blog-design.html" className="af-class-blog-heading-link">7 of the Best Examples of Beautiful Blog Design</a><div className="af-class-paragraph-light">Harum et neque voluptate voluptatem aut quis culpa modi.
                          Enim similique provident et libero quod magni soluta.
                          Repudiandae deserunt architecto itaque repellat perfe</div><div className="af-class-label af-class-cc-blog-date">February 22, 2019</div></div></div><div role="listitem" className="af-class-blog-item w-dyn-item"><a style={{backgroundImage: 'url(_https_/assets-global.website-files.com/6536d7f1a8739ee6bf8581b6/6536d7f1a8739ee6bf858211_portfolio%202%20-%20wide.html)'}} href="post/5-principles-of-effective-web-design.html" className="af-class-blog-preview-image w-inline-block" /><div className="af-class-blog-summary-wrap"><a href="post/5-principles-of-effective-web-design.html" className="af-class-blog-heading-link">5 Principles Of Effective Web Design</a><div className="af-class-paragraph-light">Qui unde velit voluptatem architecto qui sequi et delectus.
                          Dolore at quia et tempora maiores qui vel ipsam voluptas.
                          Cupiditate qui vel.
                          Placeat dolor ex voluptas architecto sit.
                          Ea ad deserunt dicta et.
                          Asperiores veniam voluptatum odio veritatis alias nihil.
                          Dolor libero fac</div><div className="af-class-label af-class-cc-blog-date">February 22, 2019</div></div></div><div role="listitem" className="af-class-blog-item w-dyn-item"><a style={{backgroundImage: 'url(_https_/assets-global.website-files.com/6536d7f1a8739ee6bf8581b6/6536d7f1a8739ee6bf85820f_portfolio%203%20-%20wide.html)'}} href="post/15-best-blogs-to-follow-about-web-design.html" className="af-class-blog-preview-image w-inline-block" /><div className="af-class-blog-summary-wrap"><a href="post/15-best-blogs-to-follow-about-web-design.html" className="af-class-blog-heading-link">15 Best Blogs To Follow About Web Design</a><div className="af-class-paragraph-light">Maxime repellendus beatae asperiores.
                          Est sapiente a et consectetur quo voluptate explicabo quis.
                          Dignissimos error esse sapiente aperiam amet eum perspiciatis.
                          Dolor totam voluptatum veritatis ex assumenda ut assumenda accus</div><div className="af-class-label af-class-cc-blog-date">February 22, 2019</div></div></div><div role="listitem" className="af-class-blog-item w-dyn-item"><a style={{backgroundImage: 'url(_https_/assets-global.website-files.com/6536d7f1a8739ee6bf8581b6/6536d7f1a8739ee6bf85821b_portfolio%204%20-%20wide.html)'}} href="post/14-common-misconceptions-about-web-design.html" className="af-class-blog-preview-image w-inline-block" /><div className="af-class-blog-summary-wrap"><a href="post/14-common-misconceptions-about-web-design.html" className="af-class-blog-heading-link">14 Common Problems with modern Web Design</a><div className="af-class-paragraph-light">Est aperiam dolores fuga ut id.
                          Itaque et minima quae similique aliquid.
                          Est tempora aliquam quasi nihil dolores ut blanditiis dolor.
                          Laboriosam omnis quae accusamus totam a totam eius.
                          Est ad ea est autem ut iusto sed velit et.
                          Possimus quos hic dolo</div><div className="af-class-label af-class-cc-blog-date">February 22, 2019</div></div></div><div role="listitem" className="af-class-blog-item w-dyn-item"><a style={{backgroundImage: 'url(_https_/assets-global.website-files.com/6536d7f1a8739ee6bf8581b6/6536d7f1a8739ee6bf858210_portfolio%205%20-%20wide.html)'}} href="post/10-quick-tips-about-blogging.html" className="af-class-blog-preview-image w-inline-block" /><div className="af-class-blog-summary-wrap"><a href="post/10-quick-tips-about-blogging.html" className="af-class-blog-heading-link">10 Quick Tips About Blogging</a><div className="af-class-paragraph-light">Sit quam quae perferendis harum amet dolorum possimus minus.
                          Occaecati magnam animi quasi dolor quae et aut.
                          Autem voluptas alias nobis in odit.
                          Aperiam harum eum modi neque.
                          Ipsum iusto beatae et esse nobis illum hic natus.
                          Sapiente non cumque quia facilis.
                          Quo est odio culpa eaque sit ipsum mol</div><div className="af-class-label af-class-cc-blog-date">February 22, 2019</div></div></div></div></div></div></div><div className="af-class-section af-class-cc-subscribe-form"><div className="af-class-container af-class-cc-subscription-form"><div className="af-class-heading-jumbo-small">Monthly Newsletter</div><div className="af-class-paragraph-light af-class-cc-subscribe-paragraph">Sign up to receive updates from our shop, including new tea selections and upcoming events.</div><div className="af-class-form-block w-form"><form id="wf-form-Monthly-Newsletter-Form" name="wf-form-Monthly-Newsletter-Form" data-name="Monthly Newsletter Form" method="get" className="af-class-subscribe-form" data-wf-page-id="6536d7f1a8739ee6bf85819b" data-wf-element-id="2df3695a-ff87-37fa-7ac7-63d4f4891940"><input type="email" className="af-class-text-field af-class-cc-subscribe-text-field w-input" maxLength={256} name="Newsletter-Email" data-name="Newsletter Email" placeholder="Enter your email" id="Newsletter-Email" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-button w-button" /></form><div className="af-class-status-message w-form-done"><div>Thank you! Your submission has been received!</div></div><div className="af-class-status-message w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div><div className="af-class-section"><div className="af-class-container"><div className="w-layout-grid af-class-footer"><a href="index.html" id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971b-87e29718" className="af-class-logo-link w-inline-block"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b7_store-logo%402x.png" width={65} alt className="af-class-logo-footer" /></a><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971d-87e29718" className="af-class-label">Menu</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2971f-87e29718" className="af-class-links-section-footer"><a href="index.html" className="af-class-footer-link">Home</a><a href="about.html" className="af-class-footer-link">About</a><a href="contact.html" className="af-class-footer-link">Contact</a><a href="products.html" className="af-class-footer-link">Products</a><a href="blog.html" aria-current="page" className="af-class-footer-link w--current">Blog</a><a href="styleguide.html" className="af-class-footer-link">Styleguide</a></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29724-87e29718" className="af-class-label">Categories</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29726-87e29718" className="af-class-links-section-footer"><div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a href="category/category-1.html" className="af-class-footer-link">Category 1</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-2.html" className="af-class-footer-link">Category 2</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-3.html" className="af-class-footer-link">Category 3</a></div><div role="listitem" className="w-dyn-item"><a href="category/category-4.html" className="af-class-footer-link">Category 4</a></div></div></div></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972d-87e29718" className="af-class-label">Help</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2972f-87e29718" className="af-class-links-section-footer"><a href="contact.html" className="af-class-footer-link">Shipping</a><a href="contact.html" className="af-class-footer-link">Returns &amp; Exchange</a><a href="contact.html" className="af-class-footer-link">Product Care</a></div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29736-87e29718" className="af-class-label">Follow</div><div id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e29738-87e29718" className="af-class-links-section-footer"><a href="https://www.instagram.com/webflowapp/" target="_blank" className="af-class-footer-link">Instagram</a><a href="https://www.facebook.com/webflow/" target="_blank" className="af-class-footer-link">Facebook</a><a href="https://twitter.com/webflow" target="_blank" className="af-class-footer-link">Twitter</a></div><a id="w-node-_88a386dd-8f07-0c34-70f0-2d9f87e2973f-87e29718" href="https://webflow.com/" target="_blank" className="af-class-made-with-webflow w-inline-block"><img src="../assets-global.website-files.com/6536d7f1a8739ee6bf858159/6536d7f1a8739ee6bf8581b9_webflow-w-small%402x.png" width={15} alt className="af-class-webflow-logo-tiny" /><div className="af-class-paragraph-tiny">Powered by Webflow</div></a></div></div></div>
          </div>
        </span>
      </span>
    )
  }
}

export default BlogView

/* eslint-enable */