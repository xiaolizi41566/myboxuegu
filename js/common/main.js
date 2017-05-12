require.config({
    baseUrl:'/',
    paths:{
        //common�ļ���
        aside:'js/common/aside',
        header:'js/common/header',
        util:'js/common/util',
        //home�ļ�����
        index:'js/home/index',
        login:'js/home/login',
        repass:'js/home/repass',
        settings:'js/home/settings',
        //teacher�ļ���
        tcEdit:'js/teacher/edit',
        tcList:'js/teacher/list',
        //user�ļ���
        usProfile:'js/user/profile',
        usList:'js/user/list',
        //course�ļ���
        csAdd:'js/course/add',
        csList:'js/course/list',
        csAdd1:'js/course/course_add_step1',
        csAdd2:'js/course/course_add_step2',
        csAdd3:'js/course/course_add_step3',
        cgAdd:'js/course/category_add',
        cgList:'js/course/category_list',

        //������ģ��
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
var obj ={
    //��ҳ��
    '/':'index',
    //home�ļ���
    '/html/home/login.html':'login',
    '/html/home/repass.html':'repass',
    '/html/home/settings.html':'settings',
    //common�ļ���
    '/html/common/aside.html':'aside',
    '/html/common/header.html':'header',
    '/html/common/style.html':'style',
    //course�ļ���
    '/html/course/add.html':'csAdd',
    '/html/course/list.html':'csList',
    '/html/course/category_add.html':'cgAdd',
    '/html/course/category_list.html':'cgList',
    '/html/course/course_add_step1.html':'csAdd1',
    '/html/course/course_add_step2.html':'csAdd2',
    '/html/course/course_add_step3.html':'csAdd3',
    //teacher�ļ���
    '/html/teacher/edit.html':'tcEdit',
    '/html/teacher/list.html':'tcList',
    //user�ļ���
    '/html/user/list.html':'usList',
    '/html/user/profile.html':'usProfile',
}

require([obj[location.pathname]])