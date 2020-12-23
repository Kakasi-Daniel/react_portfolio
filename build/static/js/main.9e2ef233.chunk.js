(this.webpackJsonpreact_app = this.webpackJsonpreact_app || []).push([
  [0],
  {
    25: function (e, t, s) {},
    26: function (e, t, s) {},
    27: function (e, t, s) {},
    33: function (e, t, s) {},
    34: function (e, t, s) {},
    35: function (e, t, s) {},
    37: function (e, t, s) {
      'use strict';
      s.r(t);
      var a = s(0),
        c = s(1),
        i = s.n(c),
        o = s(11),
        n = s.n(o),
        l = (s(25), s(3)),
        r = (s(26), s(27), s.p + 'static/media/hill.7adcc845.png'),
        b = s(7),
        d = s.n(b),
        m = s(9),
        j = s.n(m);
      var p = function (e) {
        var t = Object(c.useState)(
            JSON.parse(localStorage.getItem('time')) || !1
          ),
          s = Object(l.a)(t, 2),
          i = s[0],
          o = s[1],
          n = i ? 'page1_container night' : 'page1_container day';
        return Object(a.jsxs)('div', {
          className: n,
          children: [
            Object(a.jsx)('div', {
              onClick: function () {
                o(!i), localStorage.setItem('time', !i);
              },
              className: 'moon',
              style: i
                ? {
                    transform: 'translateX(-50%) translateY(-0vh)',
                    opacity: '1',
                  }
                : {
                    transform: 'translateX(-50%) translateY(-50vh)',
                    opacity: '0',
                  },
            }),
            Object(a.jsx)('div', {
              onClick: function () {
                o(!i), localStorage.setItem('time', !i);
              },
              className: 'sun',
              style: i
                ? {
                    transform: 'translateX(-50%) translateY(-50vh)',
                    opacity: '0',
                  }
                : {
                    transform: 'translateX(-50%) translateY(-5vh)',
                    opacity: '1',
                  },
            }),
            Object(a.jsxs)('h1', {
              className: 'hero',
              children: [
                Object(a.jsxs)('button', {
                  onClick: e.goToAbout,
                  className: 'btn about_me_btn',
                  children: [Object(a.jsx)(d.a, {}), '\xa0\xa0\xa0About me'],
                }),
                Object(a.jsx)('div', { className: 'st', children: 'Daniel' }),
                Object(a.jsx)('div', {
                  className: 'nd color_white',
                  children: 'KKsi',
                }),
                Object(a.jsxs)('button', {
                  onClick: e.goToWork,
                  className: 'btn my_work_btn',
                  children: ['View My work', Object(a.jsx)(j.a, {})],
                }),
              ],
            }),
            Object(a.jsx)('img', {
              className: 'hill',
              src: r,
              alt: '',
              style: i
                ? { filter: 'brightness(150%)' }
                : { filter: 'brightness(500%)' },
            }),
            Object(a.jsxs)('div', {
              className: 'mobile_navigation',
              children: [
                Object(a.jsxs)('button', {
                  onClick: e.goToAbout,
                  className: 'about_me_mobile',
                  children: [Object(a.jsx)(d.a, {}), 'About me'],
                }),
                Object(a.jsxs)('button', {
                  onClick: e.goToWork,
                  className: 'my_work_mobile',
                  children: ['View My work', Object(a.jsx)(j.a, {})],
                }),
              ],
            }),
          ],
        });
      };
      s(33);
      var u = function (e) {
          return Object(a.jsx)('div', {
            className: 'about_container',
            children: Object(a.jsxs)('button', {
              onClick: e.goToHome,
              className: 'btn back my_work_btn',
              children: ['Back To Home', Object(a.jsx)(j.a, {})],
            }),
          });
        },
        h = (s(34), s(14)),
        g = s.n(h),
        k = s(15),
        O = s.n(k);
      s(35);
      var x = function (e) {
          return Object(a.jsxs)('div', {
            className: 'project',
            children: [
              Object(a.jsxs)('div', {
                className: 'previews',
                children: [
                  Object(a.jsx)('img', {
                    className: 'preview_img',
                    src: e.desktop,
                    alt: '',
                  }),
                  Object(a.jsx)('img', {
                    className: 'preview_img_mobile',
                    src: e.mobile,
                    alt: '',
                  }),
                ],
              }),
              Object(a.jsxs)('div', {
                className: 'info',
                children: [
                  Object(a.jsx)('h3', { children: e.title }),
                  Object(a.jsx)('p', { children: e.desc }),
                  Object(a.jsxs)('div', {
                    className: 'buttons',
                    children: [
                      Object(a.jsxs)('a', {
                        href: e.code,
                        target: '_blank',
                        className: 'btn ',
                        children: ['View code \xa0', Object(a.jsx)(g.a, {})],
                      }),
                      Object(a.jsxs)('a', {
                        href: e.link,
                        target: '_blank',
                        className: 'btn ',
                        children: ['Live Demo \xa0', Object(a.jsx)(O.a, {})],
                      }),
                    ],
                  }),
                  Object(a.jsxs)('div', {
                    className: 'buttons_mob',
                    children: [
                      Object(a.jsxs)('a', {
                        href: e.code,
                        target: '_blank',
                        className: 'btn_mob',
                        children: ['View code', Object(a.jsx)(g.a, {})],
                      }),
                      Object(a.jsxs)('a', {
                        href: e.link,
                        target: '_blank',
                        className: 'btn_mob',
                        children: ['Live Demo', Object(a.jsx)(O.a, {})],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = s(17),
        _ = s.n(f),
        v = s(18),
        N = s.n(v),
        y = s.p + 'static/media/ctas.225e244c.png',
        w = s.p + 'static/media/ctas_mobile.b2edc055.png',
        C = s.p + 'static/media/old.03af39e9.png',
        S = s.p + 'static/media/old_mobile.207c9132.png',
        T = s.p + 'static/media/kstore.895e108d.png',
        D = s.p + 'static/media/kstore_mobile.2871e8e9.png',
        K = s.p + 'static/media/barbut.d9f866ef.png',
        A = s.p + 'static/media/barbut_mobile.47f748ba.png',
        H = s.p + 'static/media/gitfind.6c658d54.png',
        B = s.p + 'static/media/gitfind_mobile.4e9d7458.png',
        q = s.p + 'static/media/dbook.5fd8d7f5.png',
        I = s.p + 'static/media/dbook_mobile.d595ca41.png',
        L = s.p + 'static/media/trackcalorie.d4379a92.png',
        F = s.p + 'static/media/trackcalorie_mobile.6f669d4b.png',
        W =
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam, molestiae repudiandae delectus ipsam, odio consequatur molestias maiores hic ipsum totam illo nemo optio impedit laboriosam alias. Ipsa distinctio nobis quibusdam?';
      var X = function (e) {
        var t = Object(c.useState)(0),
          s = Object(l.a)(t, 2),
          i = s[0],
          o = s[1];
        return Object(a.jsxs)('div', {
          className: 'work_container',
          children: [
            Object(a.jsxs)('button', {
              onClick: e.goToHome,
              className: 'btn back my_work_btn',
              children: ['Back To Home', Object(a.jsx)(d.a, {})],
            }),
            Object(a.jsx)('button', {
              className: 'mobile_back',
              onClick: e.goToHome,
              children: Object(a.jsx)(d.a, {}),
            }),
            Object(a.jsxs)('div', {
              className: 'projects_container',
              children: [
                Object(a.jsx)('button', {
                  className: 'arrow arrow_left',
                  onClick: function () {
                    var e = document.querySelectorAll('.project').length,
                      t = document.querySelector('.projects_slider')
                        .clientWidth;
                    o(0 === i ? -(e - 1) * t : i + t);
                  },
                  children: Object(a.jsx)(_.a, { className: 'fs_large' }),
                }),
                Object(a.jsx)('button', {
                  className: 'arrow arrow_right',
                  onClick: function () {
                    var e,
                      t = document.querySelectorAll('.project').length,
                      s = document.querySelector('.projects_slider')
                        .clientWidth,
                      a = -s * (t - 1);
                    console.log(a),
                      (e = i - s),
                      i === a && (e = 0),
                      console.log(e),
                      o(e);
                  },
                  children: Object(a.jsx)(N.a, { className: 'fs_large' }),
                }),
                Object(a.jsx)('div', {
                  className: 'projects_slider',
                  children: Object(a.jsxs)('div', {
                    className: 'projects_slide',
                    style: { transform: 'translateX('.concat(i, 'px)') },
                    children: [
                      Object(a.jsx)(x, {
                        desktop: y,
                        mobile: w,
                        title: 'College Landing Site',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/Saligny',
                        link: 'https://saligny.netlify.app/',
                      }),
                      Object(a.jsx)(x, {
                        desktop: C,
                        mobile: S,
                        title: 'My old Portfolio',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/kakasi',
                        link: 'https://kakasidaniel.netlify.app/',
                      }),
                      Object(a.jsx)(x, {
                        desktop: T,
                        mobile: D,
                        title: 'Ecommerce front-end',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/Kstore',
                        link: 'https://elegant-joliot-20bd3b.netlify.app/',
                      }),
                      Object(a.jsx)(x, {
                        desktop: K,
                        mobile: A,
                        title: 'Barbut',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/Barbut',
                        link: 'https://barbut.netlify.app/',
                      }),
                      Object(a.jsx)(x, {
                        desktop: H,
                        mobile: B,
                        title: 'GitHub Api Demo',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/GitFind',
                        link: 'https://kksigit.netlify.app/',
                      }),
                      Object(a.jsx)(x, {
                        desktop: q,
                        mobile: I,
                        title: 'Social Platform front-end',
                        desc: W,
                        code: 'https://socialpageapp.netlify.app/',
                        link: 'https://github.com/Kakasi-Daniel/ShitBook',
                      }),
                      Object(a.jsx)(x, {
                        desktop: L,
                        mobile: F,
                        title: 'TrackCalories',
                        desc: W,
                        code: 'https://github.com/Kakasi-Daniel/TrackCalories',
                        link: 'https://tcalories.netlify.app/',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var M = function () {
          var e = Object(c.useState)(-100),
            t = Object(l.a)(e, 2),
            s = t[0],
            i = t[1];
          return Object(a.jsx)('div', {
            className: 'slider_container',
            children: Object(a.jsxs)('div', {
              className: 'slider',
              style: { left: ''.concat(s, 'vw') },
              children: [
                Object(a.jsx)(u, {
                  goToHome: function () {
                    return i(-100);
                  },
                }),
                Object(a.jsx)(p, {
                  goToAbout: function () {
                    return i(0);
                  },
                  goToWork: function () {
                    return i(-200);
                  },
                }),
                Object(a.jsx)(X, {
                  goToHome: function () {
                    return i(-100);
                  },
                }),
              ],
            }),
          });
        },
        P = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 49))
              .then(function (t) {
                var s = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                s(e), a(e), c(e), i(e), o(e);
              });
        };
      n.a.render(
        Object(a.jsx)(i.a.StrictMode, { children: Object(a.jsx)(M, {}) }),
        document.getElementById('root')
      ),
        P();
    },
  },
  [[37, 1, 2]],
]);
//# sourceMappingURL=main.9e2ef233.chunk.js.map