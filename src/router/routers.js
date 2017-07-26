import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// const login = resolve => require(['../pages/login-common/login'], resolve);
// const login_pos = resolve => require(['../pages/login-common/login_pos'], resolve);
// const login_center_open = resolve => require(['../pages/login-common/login_center_open'], resolve);
// const login_graduation = resolve => require(['../pages/login-common/login_graduation'], resolve);
// const login_graduation_center = resolve => require(['../pages/login-common/login_graduation_center'], resolve);
// const login_leave = resolve => require(['../pages/login-common/login_leave'], resolve);
// const login_modify_pwd = resolve => require(['../pages/login-common/login_modify_pwd'], resolve);
// const login_pos_open = resolve => require(['../pages/login-common/login_pos_open'], resolve);

// const meun_main = resolve => require(['../pages/meun-common/meun_main'], resolve);
// const meun_join = resolve => require(['../pages/meun-common/meun_join'], resolve);
// const meun_order = resolve => require(['../pages/meun-common/meun_order'], resolve);
// const meun_renew = resolve => require(['../pages/meun-common/meun_renew'], resolve);
// const meun_query = resolve => require(['../pages/meun-common/meun_query'], resolve);

// const order_main = resolve => require(['../pages/order/order_main'], resolve);
// const product_coupons = resolve => require(['../pages/order/product_coupons'], resolve);
// const product_coupons_log = resolve => require(['../pages/order/product_coupons_log'], resolve);
// const renew_product_coupon = resolve => require(['../pages/order/renew_product_coupon'], resolve);
// const payment_product_detail = resolve => require(['../pages/order/payment_product_detail'], resolve);
// const order_product_detail = resolve => require(['../pages/order/order_product_detail'], resolve);
// const product_serial_number = resolve => require(['../pages/order/product_serial_number'], resolve);
// const order_coupon = resolve => require(['../pages/order/order_coupon'], resolve);
// const order_sale = resolve => require(['../pages/order/order_sale'], resolve);
// const order_address_update = resolve => require(['../pages/order/order_address_update'], resolve);
// const order_address_choose = resolve => require(['../pages/order/order_address_choose'], resolve);
// const order_address_install = resolve => require(['../pages/order/order_address_install'], resolve);
// const payment_reason = resolve => require(['../pages/order/payment_reason'], resolve);
// const payment_product_scan = resolve => require(['../pages/order/payment_product_scan'], resolve);

// const query_main = resolve => require(['../pages/order-query/query_main'], resolve);
// const query_details_information = resolve => require(['../pages/order-query/query_details_information'], resolve);
// const query_add_flaw = resolve => require(['../pages/order-query/query_add_flaw'], resolve);
// const query_mm_details = resolve => require(['../pages/order-query/query_mm_details'], resolve);
// const query_details = resolve => require(['../pages/order-query/query_details'], resolve);
// const query_list_details = resolve => require(['../pages/order-query/query_list_details'], resolve);
// const query_details_information_rr = resolve => require(['../pages/order-query/query_details_information_rr'], resolve);
// const query_install_address = resolve => require(['../pages/order-query/query_install_address'], resolve);
// const query_ticketing_information = resolve => require(['../pages/order-query/query_ticketing_information'], resolve);
// const query_ticketing = resolve => require(['../pages/order-query/query_ticketing'], resolve);


// const customer_query_main = resolve => require(['../pages/customer-query/customer_query_main'], resolve);
// const customer_details_information = resolve => require(['../pages/customer-query/customer_details_information'], resolve);
// const customer_maintenance = resolve => require(['../pages/customer-query/customer_maintenance'], resolve);
// const customer_direct_data = resolve => require(['../pages/customer-query/customer_direct_data'], resolve);
// const customer_query_number = resolve => require(['../pages/customer-query/customer_query_number'], resolve);
// const customer_bonus_transfer = resolve => require(['../pages/customer-query/customer_bonus_transfer'], resolve);
// const customer_business_rules = resolve => require(['../pages/customer-query/customer_business_rules'], resolve);
// const customer_invoice_info = resolve => require(['../pages/customer-invoice/customer_invoice_info'], resolve);
// const customer_invoice_main = resolve => require(['../pages/customer-invoice/customer_invoice_main'], resolve);
// const customer_invoice_product = resolve => require(['../pages/customer-invoice/customer_invoice_product'], resolve);

// const join_main = resolve => require(['../pages/join/join_main'], resolve);
// const distributor_message = resolve => require(['../pages/distributor_message'], resolve);
// const password_send_main = resolve => require(['../pages/order-password/password_send_main'], resolve);
// const password_send_query = resolve => require(['../pages/order-password/password_send_query'], resolve);
// const member_to_distributor_main = resolve => require(['../pages/member-to-distributor/member_to_distributor_main'], resolve);
// const member_to_distributor_message = resolve => require(['../pages/member-to-distributor/member_to_distributor_message'], resolve);
// const sku_query_main = resolve => require(['../pages/sku-query/sku_query_main'], resolve);
// const renew_main = resolve => require(['../pages/renew/renew_main'], resolve);
// const renewal_setting_main = resolve => require(['../pages/renewal-setting/renewal_setting_main'], resolve);
// const renewal_setting_query = resolve => require(['../pages/renewal-setting/renewal_setting_query'], resolve);
// const product_coupons_query_main = resolve => require(['../pages/product-coupons-query/product_coupons_query_main'], resolve);
// const product_coupons_details = resolve => require(['../pages/product-coupons-query/product_coupons_details'], resolve);
// const payment = resolve => require(['../pages/payment'], resolve);


const login = require('../pages/login-common/login');
const login_pos = require('../pages/login-common/login_pos');
const login_center_open = require('../pages/login-common/login_center_open');
const login_graduation = require('../pages/login-common/login_graduation');
const login_graduation_center = require('../pages/login-common/login_graduation_center');
const login_leave = require('../pages/login-common/login_leave');
const login_modify_pwd = require('../pages/login-common/login_modify_pwd');
const login_pos_open = require('../pages/login-common/login_pos_open');
const meun_main = require('../pages/meun-common/meun_main');
const meun_join = require('../pages/meun-common/meun_join');
const meun_order = require('../pages/meun-common/meun_order');
const meun_renew = require('../pages/meun-common/meun_renew');
const meun_query = require('../pages/meun-common/meun_query');
const order_main = require('../pages/order/order_main');
const product_coupons = require('../pages/order/product_coupons');
const product_coupons_log = require('../pages/order/product_coupons_log');
const renew_product_coupon = require('../pages/order/renew_product_coupon');
const payment_product_detail = require('../pages/order/payment_product_detail');
const order_product_detail = require('../pages/order/order_product_detail');
const product_serial_number = require('../pages/order/product_serial_number');
const order_coupon = require('../pages/order/order_coupon');
const order_sale = require('../pages/order/order_sale');
const order_address_update = require('../pages/order/order_address_update');
const order_address_choose = require('../pages/order/order_address_choose');
const order_address_install = require('../pages/order/order_address_install');
const payment_reason = require('../pages/order/payment_reason');
const payment_product_scan = require('../pages/order/payment_product_scan');
const query_main = require('../pages/order-query/query_main');
const query_details_information = require('../pages/order-query/query_details_information');
const query_add_flaw = require('../pages/order-query/query_add_flaw');
const query_mm_details = require('../pages/order-query/query_mm_details');
const query_details = require('../pages/order-query/query_details');
const query_list_details = require('../pages/order-query/query_list_details');
const query_details_information_rr = require('../pages/order-query/query_details_information_rr');
const query_install_address = require('../pages/order-query/query_install_address');
const query_ticketing_information = require('../pages/order-query/query_ticketing_information');
const query_ticketing = require('../pages/order-query/query_ticketing');
const customer_query_main = require('../pages/customer-query/customer_query_main');
const customer_details_information = require('../pages/customer-query/customer_details_information');
const customer_maintenance = require('../pages/customer-query/customer_maintenance');
const customer_direct_data = require('../pages/customer-query/customer_direct_data');
const customer_query_number = require('../pages/customer-query/customer_query_number');
const customer_bonus_transfer = require('../pages/customer-query/customer_bonus_transfer');
const customer_business_rules = require('../pages/customer-query/customer_business_rules');
const customer_invoice_info = require('../pages/customer-invoice/customer_invoice_info');
const customer_invoice_main = require('../pages/customer-invoice/customer_invoice_main');
const customer_invoice_product = require('../pages/customer-invoice/customer_invoice_product');
const join_main = require('../pages/join/join_main');
const distributor_message = require('../pages/distributor_message');
const password_send_main = require('../pages/order-password/password_send_main');
const password_send_query = require('../pages/order-password/password_send_query');
const member_to_distributor_main = require('../pages/member-to-distributor/member_to_distributor_main');
const member_to_distributor_message = require('../pages/member-to-distributor/member_to_distributor_message');
const sku_query_main = require('../pages/sku-query/sku_query_main');
const renew_main = require('../pages/renew/renew_main');
const renewal_setting_main = require('../pages/renewal-setting/renewal_setting_main');
const renewal_setting_query = require('../pages/renewal-setting/renewal_setting_query');
const product_coupons_query_main = require('../pages/product-coupons-query/product_coupons_query_main');
const product_coupons_details = require('../pages/product-coupons-query/product_coupons_details');
const payment = require('../pages/payment');

const router = new VueRouter({
    routes:[
        /*登录*/
            {
                path:'/login',
                name:'login',
                component:login
            } , 
            {
                path:'/login_pos',
                name:'login_pos',
                component: login_pos
            } ,
            {
                path:'/login_center_open',
                name:'login_center_open',
                component: login_center_open
            } ,
            {
                path:'/login_graduation',
                name:'login_graduation',
                component: login_graduation
            } ,
            {
                path:'/login_graduation_center',
                name:'login_graduation_center',
                component: login_graduation_center
            } ,
            {
                path:'/login_leave',
                name:'login_leave',
                component: login_leave
            } ,
            {
                path:'/login_modify_pwd',
                name:'login_modify_pwd',
                component: login_modify_pwd
            } ,
            {
                path:'/login_pos_open',
                name:'login_pos_open',
                component: login_pos_open
            } ,

        /*菜单*/
            {
                path:'/meun_main',
                name:'meun_main',
                component: meun_main
            } ,
            {
                path:'/meun_join',
                name:'meun_join',
                component: meun_join
            } ,
            {
                path:'/meun_order',
                name:'meun_order',
                component: meun_order
            } ,
            {
                path:'/meun_renew',
                name:'meun_renew',
                component: meun_renew
            } ,
            {
                path:'/meun_query',
                name:'meun_query',
                component: meun_query
            } ,

        /*订单*/
            {
                path:'/order_main',
                name:'order_main',
                component: order_main
            } ,
            {
                path:'/product_coupons',
                name:'product_coupons',
                component: product_coupons
            } ,
            {
                path:'/product_coupons_log',
                name:'product_coupons_log',
                component: product_coupons_log
            } ,
            {
                path:'/renew_product_coupon',
                name:'renew_product_coupon',
                component: renew_product_coupon
            } ,
            {
                path:'/payment_product_detail',
                name:'payment_product_detail',
                component: payment_product_detail
            } ,
            {
                path:'/order_product_detail',
                name:'order_product_detail',
                component: order_product_detail
            } ,
            {
                path:'/product_serial_number',
                name:'product_serial_number',
                component: product_serial_number
            } ,
            {
                path:'/order_coupon',
                name:'order_coupon',
                component: order_coupon
            } ,            
            {
                path:'/order_sale',
                name:'order_sale',
                component: order_sale
            } ,
            {
                path:'/order_address_update',
                name:'order_address_update',
                component: order_address_update
            } ,
            {
                path:'/order_address_choose',
                name:'order_address_choose',
                component: order_address_choose
            } ,
            {
                path:'/order_address_install',
                name:'order_address_install',
                component: order_address_install
            } ,
            {
                path:'/payment_reason',
                name:'payment_reason',
                component: payment_reason
            } ,
            {
                path:'/payment_product_scan',
                name:'payment_product_scan',
                component: payment_product_scan
            } ,

        /*订单查询*/
            {
                path:'/query_main',
                name:'query_main',
                component: query_main
            } ,
            {
                path:'/query_details_information',
                name:'query_details_information',
                component: query_details_information
            } ,
            {
                path:'/query_add_flaw',
                name:'query_add_flaw',
                component: query_add_flaw
            } ,
            {
                path:'/query_mm_details',
                name:'query_mm_details',
                component: query_mm_details
            } ,
            {
                path:'/query_details',
                name:'query_details',
                component: query_details
            } ,
            {
                path:'/query_list_details',
                name:'query_list_details',
                component: query_list_details
            } ,
            {
                path:'/query_details_information_rr',
                name:'query_details_information_rr',
                component: query_details_information_rr
            } ,
            {
                path:'/query_install_address',
                name:'query_install_address',
                component: query_install_address
            } ,
            {
                path:'/query_ticketing_information',
                name:'query_ticketing_information',
                component: query_ticketing_information
            } ,
            {
                path:'/query_ticketing',
                name:'query_ticketing',
                component: query_ticketing
            } ,
        
        /*客户查询*/
            {
                path:'/customer_query_main',
                name:'customer_query_main',
                component: customer_query_main
            } ,
            {
                path:'/customer_bonus_transfer',
                name:'customer_bonus_transfer',
                component: customer_bonus_transfer
            } ,
            {
                path:'/customer_business_rules',
                name:'customer_business_rules',
                component: customer_business_rules
            } ,
            {
                path:'/customer_details_information',
                name:'customer_details_information',
                component: customer_details_information
            } ,
            {
                path:'/customer_maintenance',
                name:'customer_maintenance',
                component: customer_maintenance
            } ,
            {
                path:'/customer_direct_data',
                name:'customer_direct_data',
                component: customer_direct_data
            } ,
            {
                path:'/customer_query_number',
                name:'customer_query_number',
                component: customer_query_number
            } ,

        /*顧客發票*/
            {
                path:'/customer_invoice_info',
                name:'customer_invoice_info',
                component: customer_invoice_info
            } ,
            {
                path:'/customer_invoice_main',
                name:'customer_invoice_main',
                component: customer_invoice_main
            } ,
            {
                path:'/customer_invoice_product',
                name:'customer_invoice_product',
                component: customer_invoice_product
            } ,

        /*加入*/
            {
                path:'/join_main',
                name:'join_main',
                component: join_main
            } ,
            {
                path:'/distributor_message',
                name:'distributor_message',
                component: distributor_message
            } ,

        /*訂貨密碼發送*/
            {
                path:'/password_send_main',
                name:'password_send_main',
                component: password_send_main
            } ,
            {
                path:'/password_send_query',
                name:'password_send_query',
                component: password_send_query
            } ,

        /*安麗第五代銷售系統—會員轉直銷商*/
            {
                path:'/member_to_distributor_main',
                name:'member_to_distributor_main',
                component: member_to_distributor_main
            } ,
            {
                path:'/member_to_distributor_message',
                name:'member_to_distributor_message',
                component: member_to_distributor_message
            } ,

        /*sku 查询*/
            {
                path:'/sku_query_main',
                name:'sku_query_main',
                component: sku_query_main
            } ,

        /*续约*/
            {
                path:'/renew_main',
                name:'renew_main',
                component: renew_main
            } ,

        /*续约同意設定*/
            {
                path:'/renewal_setting_main',
                name:'renewal_setting_main',
                component: renewal_setting_main
            } ,
            {
                path:'/renewal_setting_query',
                name:'renewal_setting_query',
                component: renewal_setting_query
            } ,
            
        /*產品抵用券查詢*/
            {
                path:'/product_coupons_query_main',
                name:'product_coupons_query_main',
                component: product_coupons_query_main
            } ,
            {
                path:'/product_coupons_details',
                name:'product_coupons_details',
                component: product_coupons_details
            } ,

        /*付款页面*/
            {
                path:'/payment',
                name:'payment',
                component: payment
            } , 
    ]
});
export default router;